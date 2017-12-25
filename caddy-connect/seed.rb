require './db_config'
require './models/caddy'
require './models/player'
require './models/course'
require './models/availability'
require './models/caddy_location'
require './models/listing'

# reset primary key numbering on new seeding
Caddy.connection.execute('ALTER SEQUENCE caddies_id_seq RESTART WITH 1')
Player.connection.execute('ALTER SEQUENCE players_id_seq RESTART WITH 1')
Course.connection.execute('ALTER SEQUENCE courses_id_seq RESTART WITH 1')
Availability.connection.execute('ALTER SEQUENCE availabilities_id_seq RESTART WITH 1')
CaddyLocation.connection.execute('ALTER SEQUENCE caddy_locations_id_seq RESTART WITH 1')
Listing.connection.execute('ALTER SEQUENCE listings_id_seq RESTART WITH 1')

# clear current records
Caddy.delete_all
Player.delete_all
Course.delete_all
Availability.delete_all
CaddyLocation.delete_all
Listing.delete_all

# create test caddy users (only db required entries: name, email, password)
3.times do |count|
  Caddy.create(first_name: "caddy", last_name: "#{count + 1}", email: "caddy_#{count + 1}@test.com", password: "caddy_#{count + 1}")
  # add availabilities for each of the caddies
  
end

# create test player users (only db required entries: name, email, password)
3.times do |count|
  Player.create(first_name: "player", last_name: "#{count + 1}", email: "player_#{count + 1}@test.com", password: "player_#{count + 1}")
end

# create test courses
3.times do |count|
  Course.create(name: "course_#{count + 1}")
end

# create test listings
# cr
