class User < ActiveRecord::Base
  has_many :dishes
  has_many :likes
  has_secure_password
end
