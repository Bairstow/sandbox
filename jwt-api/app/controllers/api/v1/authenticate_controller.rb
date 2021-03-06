require 'jwt'

class Api::V1::AuthenticateController < ApplicationController
  def create
    user_email = request.headers['HTTP_EMAIL']
    user_password = request.headers['HTTP_PASSWORD']
    user = User.find_by(email: user_email)
    if user && user.authenticate(user_password)
      # looking to generate and return a jwt to the user from this point. will refactor this method
      jwt = generate_token(user_email)
      render :json => { access_token: jwt }
    else
      render :json => { error: 'No user found.' }
    end
  end

  def generate_token(user_email)
    # generate header (auto generated by the jwt gem)
    # generate hashing key for test switch to env variable in production
    h_key = 'testing_key'
    # generate payload
    payload = {
      iss: 'test.com',
      exp: Time.now + 2.hours,
      sub: user_email,
      scopes: ['admin']
    }
    token = JWT.encode payload, h_key, 'HS256'
    return token
  end
end
