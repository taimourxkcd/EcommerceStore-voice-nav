#app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])

    if @user && @user.authenticate(session_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: {
               logged_in: true,
               user: @user,
               token: token, # send the JWT token back to the client
             }
    else
      render json: {
               status: 401,
               errors: ["no such user, please try again"],
             }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
               logged_in: true,
               user: current_user,
             }
    else
      render json: {
               logged_in: false,
               message: "no such user",
             }
    end
  end

  def destroy
    logout!
    render json: {
             status: 200,
             logged_out: true,
           }
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
