class SessionsController < ApplicationController
  def create
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      session[:current_user_id] = @user.id
      redirect_to '/success'
    else
      redirect_to '/login'
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to '/'
  end
end
