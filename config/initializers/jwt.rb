require "jwt"

class Auth
  ALGORITHM = "HS256"

  def self.issue(payload)
    JWT.encode(payload, ENV["JWT_SECRET_KEY"], ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, ENV["JWT_SECRET_KEY"], true, { algorithm: ALGORITHM }).first
  end
end
