module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:show]

      def index
        users = User.all
        render json: users, status: :ok
      end

      def create
        user = User.new(user_params)
        if user.save
          token = Auth.issue({ user_id: user.id })
          render json: { user: UserSerializer.new(user).serialize, jwt: token, status: "success", data: user }, status: :ok
        else
          render json: { error: user.errors.full_messages.join(",") }, status: :unprocessable_entity
        end
      end

      def show
        user = User.find_by(id: params[:id])
        if user
          render json: { status: "success", data: user }, status: :ok
        else
          render json: { error: "User not found" }, status: :not_found
        end
      end

      # new methods

      def getAllUsers
        users = User.all
        render json: users, status: :ok
      end

      def getaUser
        @user = User.find(params[:id])
        render json: @user
      end

      def deleteaUser
        @user = User.find(params[:id])
        @user.destroy
        head :no_content
      end

      def updateaUser
        @user = User.find(params[:id])

        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :customer_id, :supplier_id, :phone, :password)
      end

      def authenticate_user!
        token = request.headers["Authorization"]
        if token
          token = token.split(" ").last
          decoded_token = Auth.decode(token)
          Rails.logger.info("decoded token: #{decoded_token}") # add this log to see decoded token
          @current_user ||= User.find(decoded_token["user_id"])
          Rails.logger.info("authenticated user: #{@current_user}") # add this log to see authenticated user
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
      rescue JWT::VerificationError, JWT::DecodeError
        render json: { error: "Unauthorized" }, status: :unauthorized
      end
    end
  end
end
