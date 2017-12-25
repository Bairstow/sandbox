require 'pry'
require 'active_record'

ActiveRecord::Base.logger = Logger.new (STDERR)

require './db_config'
require './models/caddy'
require './models/player'
require './models/course'
require './models/availability'
require './models/caddy_location'
require './models/listing'

binding.pry
