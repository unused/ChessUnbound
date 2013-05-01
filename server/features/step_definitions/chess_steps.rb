# FEN: r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4
# 8 r . b q k b n r
# 7 p p p . . p p p
# 6 . . n p . . . .
# 5 . . . . p . . .
# 4 . . B . P . . .
# 3 . . . . . Q . .
# 2 P P P P . P P P
# 1 R N B . K . N R
#   a b c d e f g h

# chess-mate: f3d7

TEST_GAME_FEN = "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4"

Given /^the following list of games:$/  do |games|
  games.hashes.each do |game|
    Game.create(game.merge(fen: TEST_GAME_FEN))
  end
end

Given /^the game "([^"]*)"$/  do |game|
  Game.create(_id: game, fen: TEST_GAME_FEN, status: 'playing')
end

Given /^there is a game with id "([^"]*)" waiting$/ do |game_id|
  game = { _id: game_id }
  if @user && [true,false].sample
    game[:black] = @user.username
  else
    game[:white] = @user.username
  end
  Game.create(game)
end


