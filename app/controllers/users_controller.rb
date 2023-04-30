class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show]

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      token = JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base)
      render json: { user: UserSerializer.new(user).serialize, jwt: token, status: "success", data: user }, status: :ok
    else
      render json: { error: user.errors.full_messages.join(",") }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:name, :email, :role, :customer_id, :supplier_id, :phone, :password)
  end
end
