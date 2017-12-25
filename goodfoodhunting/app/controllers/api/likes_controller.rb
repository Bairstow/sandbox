class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.dish_id = params[:dish_id]
    @like.user_id = current_user.id
    if @like.save
      count = Dish.find(params[:dish_id]).likes.count
      render json: { count: count }.to_json, status: 201
    else
      render json: @like.errors
    end
  end
end
