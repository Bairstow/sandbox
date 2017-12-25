class Api::ApiController < ActionController::Base
  private

  def authenticate
    api_key = request.headers['X-Api-Key']
    @user = User.where(api_key: api_key).first if api_key

    unless @user
      head_status: :unauthorized
      return false
    end
  end
end
