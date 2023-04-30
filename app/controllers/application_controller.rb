#app/contollers/application_controller.rb
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!, :set_user

  def encode_token(payload)
    JWT.encode(payload, "84789612cab31caa3f3f1f661635292f8b83c6bb94409a9cf525714a17655994ddfcc05076b70b3f507827b910f159ff18c9043c16ae2056fdad73b2669cb7e3") # change 'your_secret_key' to your own secret key
  end

  def decode_token(token)
    JWT.decode(token, "84789612cab31caa3f3f1f661635292f8b83c6bb94409a9cf525714a17655994ddfcc05076b70b3f507827b910f159ff18c9043c16ae2056fdad73b2669cb7e3")[0] # change 'your_secret_key' to your own secret key
  end

  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    if decoded_token
      user_id = decoded_token["user_id"]
      @current_user ||= User.find_by(id: user_id)
    end
  end

  def decoded_token
    if auth_header
      token = auth_header.split(" ")[1]
      begin
        @decoded_token ||= JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: "HS256")
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def auth_header
    request.headers["Authorization"]
  end

  def authorized_user?
    @user == current_user
  end

  def logout!
    session.clear
  end

  def set_user
    @user = User.find_by(id: session[:user_id])
  end
end
