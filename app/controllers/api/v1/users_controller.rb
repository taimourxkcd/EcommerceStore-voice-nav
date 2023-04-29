module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: users, status: :ok
      end

      def create
        user = User.new(user_params)
        if user.save
          token = issue_token(user)
          render json: { user: UserSerializer.new(user), jwt: token, status: "success", data: user }, status: :ok
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

      def getAllUsers
        users = User.all
        render json: users, status: :ok
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :phone, :password)
      end
    end
  end
end
