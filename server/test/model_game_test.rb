
require File.expand_path('../helper/bootstrap.rb', __FILE__)

describe Game do

  it "has simple json structure" do
		data = {
      black: Faker::Name.first_name,
      fen: Faker::Lorem.characters(65),
      white: Faker::Name.first_name
    }
		game = Game.new(data)
		game.to_json(only: [:black,:white,:fen]).must_equal data.to_json
  end

  it "does not care if black or white" do
    user = User.generate
    another_user = User.generate
    game = Game.create({
      black: user.username,
      white: another_user.username,
      fen: Faker::Lorem.characters(65)
    })
    Game.find_by_username(user.username).last._id.must_equal game._id
    Game.find_by_username(another_user.username).last._id.must_equal game._id
  end

  it "does handle 2 players" do
    black = Faker::Name.first_name
    white = Faker::Name.first_name
    game = Game.new(black: black)
    game.add_player(white)
    game.white.must_equal white
    game.black.must_equal black
    game = Game.new(white: white)
    game.add_player(black)
    game.white.must_equal white
    game.black.must_equal black
    proc {
      game = Game.new(white: white, black: black)
      game.add_player(Faker::Name.first_name)
    }.must_raise(RuntimeError)
  end

  it "respond on its status" do
    game = Game.new(status: 'playing')
    game.playing?.must_equal true
    game.waiting?.must_equal false
    game.status = 'waiting'
    game.playing?.must_equal false
    game.waiting?.must_equal true
  end

end

