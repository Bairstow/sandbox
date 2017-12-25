class Course < ActiveRecord::Base
  has_many :caddies
  has_many :players
  has_many :caddy_locations
  has_many :listings
end
