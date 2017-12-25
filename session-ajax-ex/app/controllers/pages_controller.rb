class PagesController < ApplicationController
  def index
  end

  def login
  end

  def success
  end

  def continue
    if session[:current_user_id]
      @current_user = User.find(session[:current_user_id])
    else
      redirect_to '/'
    end
  end

  def ajax_check
    if session[:current_user_id]
      current_user = User.find(session[:current_user_id])
      render :json => { name: current_user.name }
    else
      render :json => { error: 'Session not currently valid' }
    end
  end
end
