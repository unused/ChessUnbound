
# FEN: r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4
#   8 r . b q k b n r
#   7 p p p . . p p p
#   6 . . n p . . . .
#   5 . . . . p . . .
#   4 . . B . P . . .
#   3 . . . . . Q . .
#   2 P P P P . P P P
#   1 R N B . K . N R
#     a b c d e f g h

TEST_GAME_FEN = "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4"

Given(/^a running game$/) do
  pending "TODO server: start game, client: join game"
  # @game = ...
  # @current_color
  # @opponent_color
end

Given(/^I am (white|black)$/) do |color|
  pending "TODO client: set player"
end

Given(/^I move a piece correctly$/) do
  pending "TODO client: move piece"
end

When(/^it is( not)? (white|black|my) turn$/) do |negate,color|
  pending "TODO client: set game situation"
end

When(/^there is a remis request$/) do
  pending "TODO client: set remis request"
end

Then(/^the board should be updated$/) do
  pending "TODO client: compare fen"
end

Then(/^I need to wait for (black|white)$/) do |color|
  opponent_color = color == "black" ? "white" : "black"
  step %{it is #{opponent_color} turn}
end

Then(/^the game ends with (black|white) wins?$/) do |color|
  page.find("#game-info").have_content("#{color} wins!")
end

Then(/^the game ends with I (lost|won)?$/) do |state|
  # winner_color = state == "won" ? current_color : opponent_color
  pending "TODO call step wins with oppenent color"
end
