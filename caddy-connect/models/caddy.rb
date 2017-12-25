class Caddy < ActiveRecord::Base
  has_many :caddy_locations
  belongs_to :availability
  belongs_to :course
  has_secure_password
end
