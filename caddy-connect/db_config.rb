require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'caddyconnect'
}

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || options)
