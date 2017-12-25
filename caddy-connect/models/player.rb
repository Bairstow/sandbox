class Player < ActiveRecord::Base
  has_many :listings
  belongs_to :course
  has_secure_password
end
