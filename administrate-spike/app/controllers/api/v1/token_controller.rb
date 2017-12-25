require 'jwt'
require './env_var.rb'

class Api::V1::TokenController < ApplicationController
  def create
    user_email = request.headers['HTTP_EMAIL']
    user_password = request.headers['HTTP_PASSWORD']
    user = User.find_by(email: user_email)
    if user && user.authenticate(user_password)
      # looking to generate and return a jwt to the user from this point. will refactor this method
      jwt = generate_token(user)
      render :json => { access_token: jwt }
    else
      render :json => { error: 'No user found.' }
    end
  end

  def generate_token(user)
    # generate header (auto generated by the jwt gem)
    # generate payload
    privilege_scope = user.admin ? 'admin' : 'regular'
    payload = {
      iss: 'test.com',
      exp: Time.now.to_i + 2 * 3600,
      sub: user.email,
      scopes: [privilege_scope]
    }
    token = JWT.encode payload, ENV_VAR[:h_key], 'HS256'
    return token
  end
end