
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

  validates :status, inclusion: { in: STATUS }

  def as_json(options=nil)
    super({only: [:_id,:black,:white,:fen]}.merge(options))
  end

  def add_player(username)
    if self.white.nil?
      self.white = username
    elsif self.black.nil?
      self.black = username
    else
      raise "game has too many player"
    end
  end

  def waiting?
    status == 'waiting'
  end

  def playing?
    status == 'playing'
  end

  def self.create(game)
    super({ fen: INIT_FEN, status: 'waiting' }.merge game)
  end

  def self.find_by_username(username)
    where('$or' => [{ black: username }, { white: username }])
  end
end

