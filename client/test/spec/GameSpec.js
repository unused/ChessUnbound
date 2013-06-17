describe("Game", function() {

  it("does know who's turn it is", function() {
    var start_fen = 'r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
      game = new ChessUnbound.model.Game
    Server.setUser({get: function() { return 'me'; }});
    game.set('fen', start_fen);
    game.set('white', 'me');
    game.set('black', 'not me');
    expect(game.is_my_turn()).toEqual(true);
    game.set('white', 'not me');
    game.set('black', 'me');
    expect(game.is_my_turn()).toEqual(false);
  });

  it("does inform the player about the game status", function() {
    var start_fen = 'r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
      game = new ChessUnbound.model.Game
    Server.setUser({get: function() { return 'me'; }});
    game.set('fen', start_fen);
    game.set('white', 'me');
    game.set('black', 'not me');
    game.set('status', 'waiting');
    expect(game.status_message()).toEqual('<span class="waiting">waiting - for other player to join</span>');
    game.set('status', 'playing');
    expect(game.status_message()).toEqual('<span class="playing active">playing - your turn</span>');
    game.set('status', 'finished');
    expect(game.status_message()).toEqual('<span class="lost">finished - you lost</span>');

    game.set('white', 'not me');
    game.set('black', 'me');
    game.set('status', 'waiting');
    expect(game.status_message()).toEqual('<span class="waiting">waiting - for other player to join</span>');
    game.set('status', 'playing');
    expect(game.status_message()).toEqual('<span class="playing">playing - opponent turn</span>');
    game.set('status', 'finished');
    expect(game.status_message()).toEqual('<span class="won">finished - you won</span>');
  });

});
