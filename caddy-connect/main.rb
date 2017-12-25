require 'sinatra'
require 'sinatra/base'
require 'pg'
require 'pry'

require './db_config'
require './models/availability'
require './models/caddy_location'
require './models/caddy'
require './models/course'
require './models/listing'
require './models/player'

configure :development do
  require 'sinatra/reloader'
end

class CaddyConnect < Sinatra::Base
  get '/' do
    erb :index
  end
  get '/search' do
    erb :search
  end
  get '/sign-up' do
    erb :signup
  end
  post '/user/new' do
    # New user creation
    # if new user is player only add to database then redirect to search page
    if params['player-checkbox'] == 'on'
      player = Player.new
      player.first_name = params['first-name']
      player.last_name = params['last-name']
      player.age = params['age']
      player.gender = params['gender']
      player.handicap = params['handicap']
      # player.home_course_id = Course.find_by(name: params['home-course']).id
      player.suburb = params['suburb']
      player.history = params['history']
      player.email = params['email']
      player.password = params['password']
      if player.save
        redirect to '/search'
      else
      end
    end
    redirect to '/search'
  end
end
