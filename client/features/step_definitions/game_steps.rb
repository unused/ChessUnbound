
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

Given(/^a waiting game$/) do
  @game = Game.create(
    name: 'waiting game',
    status: 'waiting',
    black: 'another player',
    fen: TEST_GAME_FEN
  )
end

Given(/^a running game$/) do
  steps "Given a waiting game"
  steps %Q{
      And I am on the "GamesListContainer" screen
      And I press the "Join a Game" button
      And I tap the "#{@game.name}" game in the list
      And I tap the "#{@game.name}" game in the list
  }
  sleep(5)
end

Given(/^I move a piece correctly$/) do
  page.execute_script %(
    Ext.get('chess_board').select('td').elements[#{ChessFieldHelper.code_to_index('a2')}].dom.click();
    Ext.get('chess_board').select('td').elements[#{ChessFieldHelper.code_to_index('a3')}].dom.click();
  )
end

Then(/^it is( not)? (white|black) turn$/) do |negate,color|
  @game.reload
  turn = (@game.fen.match(/.* (w|b) .*/)[1] == color[0])
  assert (negate) ? !turn : turn
end

Then(/^the game ends with (black|white) wins?$/) do |color|
  page.find("#game-info").have_content("#{color} wins!")
end

Then(/^the game ends with I (lost|won)?$/) do |state|
  # winner_color = state == "won" ? current_color : opponent_color
  pending "TODO call step wins with oppenent color"
end
