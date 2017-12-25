require 'pry'
require 'jwt'
require './env_var.rb'

# All Administrate controllers inherit from this `Admin::ApplicationController`,
# making it the ideal place to put authentication logic or other
# before_filters.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_filter :authenticate_admin

    def authenticate_admin
      # TODO Add authentication logic here.
      # check supplied access token if validated and user has admin access, else redirect
      # puts request.headers['HTTP_AUTHORIZATION']
      redirect_to '/' unless access_privilege_admin
    end

    private
      def access_privilege_admin
        puts 'checking admin privileges...'
        token = request.headers['HTTP_AUTHORIZATION'].split(' ')
        puts token[0]
        puts token[1]
        begin
          decoded_token = JWT.decode token[1], ENV_VAR[:h_key], true, { :algorithm => 'HS256' }
        rescue JWT::ImmatureSignature
          puts 'invalid token passed'
          return false
        end
        decoded_token[0]['scopes'].include?('admin') ? true : false
      end
    # Override this value to specify the number of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end
