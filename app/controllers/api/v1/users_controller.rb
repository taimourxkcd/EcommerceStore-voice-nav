module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: users, status: :ok
      end

      def create
        User.new(user_params)
        if user.save
          render json: { status: "success", data: user }, status: :ok
        else
          render json: { error: user.errors.full_messages.join(",") }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :phone, :password)
      end
    end
  end
end
