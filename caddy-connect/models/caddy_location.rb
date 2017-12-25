class CaddyLocation < ActiveRecord::Base
  belongs_to :caddy
  belongs_to :course
end
