require 'token.rb'
require 'env_var.rb'
class SessionsController < ApplicationController
  def create
    # find and authenticate user and generate new jwt
    u = User.find_by(email: params[:email])
    if u && u.authenticate(params[:password]) && u.admin = true
      new_token = JWToken.new(u).generate_token
      render json: { access_token: new_token }
    else
      render json: { error: 'invalid login' }
    end
  end

  def expiry
    if request.headers[:HTTP_AUTHORIZATION]
      token = request.headers[:HTTP_AUTHORIZATION].split(' ')[1]
      begin
        decoded_token = JWT.decode token, local_secret_getter, true, { :algorithm => 'HS256' }
        expires_in = decoded_token[0]["exp"] - Time.now.to_i
        render json: { expiry: expires_in }
      rescue JWT::ExpiredSignature
        render json: { error: 'Token has expired' }
      end
    end
  end
end
