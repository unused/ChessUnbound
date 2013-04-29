
# chess game with state stored in FEN notation
class Game
	include Mongoid::Document
  include Mongoid::Timestamps

	field :black, type: String
	field :white, type: String
  field :fen, type: String

  def as_json(options=nil)
    super({only: [:black,:white,:fen]}.merge(options))
  end
end

