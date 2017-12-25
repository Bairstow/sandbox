class PagesController < ApplicationController

  def home
    if logged_in?
      @user = current_user
    end
    render :home, layout: 'home'
  end

  def show_dish
    @dish = Dish.find(params[:id])
    render :show_dish, layout: 'session'
  end
end
