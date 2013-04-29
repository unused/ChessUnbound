require 'active_support'

# registered ChessUnbound user
class User
	include Mongoid::Document
  include Mongoid::Timestamps

  KEY_LENGTH = 26
  GUEST_NAME = 'Guest'

	field :username, type: String
	field :key, type: String

  def as_json(options=nil)
    super({only: [:username,:key]}.merge(options))
  end

  def self.generate
    begin
      username = "#{GUEST_NAME}#{SecureRandom.random_number(8)}"
    end while User.find_by(username: username)
    User.create(username: username, key: User.generate_key)
  end

  def self.generate_key
    SecureRandom.hex(KEY_LENGTH)
  end
end
