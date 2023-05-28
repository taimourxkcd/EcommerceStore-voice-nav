class SessionsController < ApplicationController
  # include CurrentUserConcern

  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      token = JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base)
      render json: {
        logged_in: true,
        user: UserSerializer.new(user).serialize, # Use serialization
        token: token,
      }
    else
      render json: { errors: "Invalid email or password" }
    end
  end

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: UserSerializer.new(@current_user).serialize, # Use serialization
      }
    else
      render json: {
        logged_in: false,
        message: "no such user",
      }
    end
  end

  def logout
    session.delete(:token) # Remove the token from the session
    render json: { status: 200, logged_out: true }
  end

  # todo: delete this method
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
