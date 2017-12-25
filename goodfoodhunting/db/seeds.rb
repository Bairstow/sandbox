# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# GoodFoodHunting Seeding

Dish.delete_all
User.delete_all
Like.delete_all


User.create(email: 'cake@pudding.com' , password: 'pudding')
User.create(email: 'donuts@pudding.com' , password: 'pudding')
User.create(email: 'jam@pudding.com', password: 'pudding')

DishType.create(name: 'Breakfast')
DishType.create(name: 'Lunch')
DishType.create(name: 'Dinner')
DishType.create(name: 'Dessert')
DishType.create(name: 'Snack')

Venue.create(name: 'The Pudding Palace')
Venue.create(name: 'Snack Hut')
Venue.create(name: 'Food Emporium')

img = 'http://s3.amazonaws.com/foodspotting-ec2/reviews/5714113/thumb_600.jpg?1453015528?1453075100'

10.times do |count|
  Dish.create(name: "dish_#{count}", image_url: img, venue_id: Venue.pluck(:id).sample,  dish_type_id: DishType.pluck(:id).sample, user_id: User.pluck(:id).sample)
end

# Generate a random like for each of the user accounts

User.all.each do |user|
  Like.create(user_id: user.id, dish_id: Dish.pluck(:id).sample)
end
