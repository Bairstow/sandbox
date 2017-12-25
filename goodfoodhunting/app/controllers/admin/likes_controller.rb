class Admin::LikesController < ApplicationController

  def index
    @likes = Like.all
  end

  def new
  end

  def create
    @like = Like.new
    @like.user_id = params[:user_id]
    @like.dish_id = params[:dish_id]
    @like.save
    redirect_to '/'
  end

  def show
    @like = Like.find(params[:id])
  end

  def edit
    @like = Like.find(params[:id])
  end

  def update
    @like = Like.find(params[:id])
    @like.user_id = params[:user_id]
    @like.dish_id = params[:dish_id]
    @like.save
    redirect_to '/'
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    redirect_to '/'
  end

end
