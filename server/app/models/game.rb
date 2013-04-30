
# chess game with state stored in FEN notation
class Game
	include Mongoid::Document
  include Mongoid::Timestamps

  STATUS = %w(waiting playing aborted finished)
  INIT_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"

	field :black, type: String
	field :white, type: String
  field :fen, type: String
  field :status, type: String

  # validates :status, inclusion: { in: STATUS }

  # def create(game)
  #   game.merge!(fen: INIT_FEN, status: 'waiting')
  #   super game
  # end

  def as_json(options=nil)
    super({only: [:_id,:black,:white,:fen]}.merge(options))
  end

  def self.find_by_username(username)
    where('$or' => [{ black: username }, { white: username }])
  end
end

