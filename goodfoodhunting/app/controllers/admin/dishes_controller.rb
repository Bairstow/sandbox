class Admin::DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def new
    @dish = Dish.new
  end

  def create
    @dish = Dish.new
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.venue = params[:venue]
    @dish.save
    redirect_to admin_dishes_path
  end

  def show
    @dish = Dish.find(params[:id])
    @likes = @dish.likes.all
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.venue = params[:venue]
    @dish.save
    redirect_to admin_dishes_path
  end

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    redirect_to admin_dishes_path
  end
end
