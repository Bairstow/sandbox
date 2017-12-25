require 'env_var.rb'
class JWToken
  def initialize(user)
    @user = user
  end

  def generate_token
    # set expiration time for three minutes from time of generation
    expiration_time = Time.now.to_i + 3 * 60
    print "Expiration time: "
    puts expiration_time
    payload = {
      iss: 'localhoster.com',
      exp: expiration_time,
      sub: @user.email,
      scopes: ["admin"]
    }
    secret = local_secret_getter
    return JWT.encode payload, secret, 'HS256'
  end
end
