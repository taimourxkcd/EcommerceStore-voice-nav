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
          render json: { status: "success", data: user }, status: :ok
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

      private

      def user_params
        params.permit(:name, :email, :phone, :password)
      end
    end
  end
end
