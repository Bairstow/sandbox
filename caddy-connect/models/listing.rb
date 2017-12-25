class Listing < ActiveRecord::Base
  belongs_to :player
  belongs_to :course
end
