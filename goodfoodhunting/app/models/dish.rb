class Dish < ActiveRecord::Base
  has_many :likes
  belongs_to :user
  belongs_to :dish_type
  belongs_to :venue

  def counter
    likes.count
  end
  def user_name
    name = user.email.slice(0, /@/.match(user.email).begin(0))
  end
  def venue_name
    venue.name
  end
  def dish_type_name
    dish_type.name
  end
end
