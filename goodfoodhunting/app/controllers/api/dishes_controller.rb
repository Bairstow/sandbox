class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
    render json: @dishes, methods: [:counter, :user_name, :venue_name, :dish_type_name], status: 200
  end
end
