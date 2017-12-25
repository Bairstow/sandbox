require 'pry'
require 'sinatra'
require 'sinatra/partial'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'moviedb')
  results = db.exec(sql)
  db.close
  return results
end

def parse_entry(entry)
  result = {}
  entry.each do |key, value|
    # make sure that all single apostrophes are escaped properly for sql entry
    value.gsub!("'", "''")
    result[key] = value
  end
  return result
end

get '/' do
  erb :index
end

get '/search' do
  redirect to "/search/#{params[:title]}"
end

get '/search/:title' do
  title = params[:title]
  url = "http://www.omdbapi.com/"
  address = "#{url}?s=#{title}"
  result = HTTParty.get(address)
  locals = {
    movies: result["Search"]
  }
  erb :search, :locals => locals
end

get '/about/*' do
  imdbid = params[:splat][0]
  # do some checking if currently searched title already exists in the db
  sql = "SELECT * FROM movies WHERE imdbid = '#{ imdbid }';"
  movie_db = run_sql(sql)
  if movie_db.cmd_status() == "SELECT 0"
    puts "movie not found locally adding to db"
    # movie not located in the db so fetch info from omdbapi and add to local
    url = "http://www.omdbapi.com/"
    address = "#{url}?i=#{imdbid}"
    result = HTTParty.get(address)
    result = parse_entry(result)
    sql_insert = "INSERT INTO movies (title, year, rated, released, runtime, genre, director, writer,"\
      " actors, plot, language, country, awards, poster_url, metascore, imdbrating, imdbvotes, imdbid,"\
      " type, response) VALUES ('#{result['Title']}', '#{result['Year']}', '#{result['Rated']}', '#{result['Released']}',"\
      " '#{result['Runtime']}', '#{result['Genre']}', '#{result['Director']}', '#{result['Writer']}',"\
      " '#{result['Actors']}', '#{result['Plot']}', '#{result['Language']}', '#{result['Country']}',"\
      " '#{result['Awards']}', '#{result['Poster']}', '#{result['Metascore']}', '#{result['imdbRating']}',"\
      " '#{result['imdbVotes']}', '#{result['imdbID']}', '#{result['Type']}', '#{result['Response']}');"
    run_sql(sql_insert)
    # pull newly entered data for page display.
    sql = "SELECT * FROM movies WHERE imdbid = '#{ imdbid }';"
    movie_db = run_sql(sql)
  end
  locals = {
    movie: movie_db[0]
  }
  erb :about, :locals => locals
end
