require 'active_support'

# registered ChessUnbound user
class User
	include Mongoid::Document
  include Mongoid::Timestamps

  KEY_LENGTH = 26
  GUEST_NAME = 'Guest'

	field :username, type: String
	field :key, type: String

  validates :username, uniqueness: true
  index({ username: 1 }, { unique: true })

  def as_json(options=nil)
    super({only: [:username,:key]}.merge(options))
  end

  def self.generate
    begin
      username = "#{GUEST_NAME}#{SecureRandom.random_number(1000000)}"
    end while User.find_by(username: username)
    User.create(username: username, key: User.generate_key)
  end

  def self.generate_key
    SecureRandom.hex(KEY_LENGTH)
  end
end
