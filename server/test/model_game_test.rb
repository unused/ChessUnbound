
require File.expand_path('../helper/bootstrap.rb', __FILE__)

describe Game do

  it "has simple json structure" do
		data = { black: "Me", fen: "XXX", white: "Mini-Me"}
		game = Game.new(data)
		game.to_json.must_equal data.to_json
  end

  it "does not care if black or white" do
    user = User.generate
    another_user = User.generate
    game = Game.create({
      black: user.username,
      white: another_user.username,
      fen: "Anyway the wind blows, doesn't really matter to me"
    })
    Game.find_by_username(user.username).last._id.must_equal game._id
    Game.find_by_username(another_user.username).last._id.must_equal game._id
  end

end

