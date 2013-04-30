
# chess game with state stored in FEN notation
class Game
	include Mongoid::Document
  include Mongoid::Timestamps

  STATUS = %w(waiting playing aborted finished)

	field :black, type: String
	field :white, type: String
  field :fen, type: String

  def as_json(options=nil)
    super({only: [:black,:white,:fen]}.merge(options))
  end

  def self.find_by_username(username)
    where('$or' => [{ black: username }, { white: username }])
  end
end

