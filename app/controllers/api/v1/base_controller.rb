class Api::V1::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user

  private

  def authenticate_user
    if session[:user_id]
      @current_user = User.find_by(id: session[:user_id])
    else
      render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end
  end

  def current_user
    @current_user
  end
end
