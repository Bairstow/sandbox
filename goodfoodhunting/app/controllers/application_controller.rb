class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def logged_in?
    !!current_user
  end
  helper_method :logged_in?

  def current_user
    User.find_by(id: session[:user_id])
  end
  helper_method :current_user

  def current_user_name
    user = User.find_by(id: session[:user_id])
    name = user.email.slice(0, /@/.match(user.email).begin(0))
    return name
  end
  helper_method :current_user_name
end
