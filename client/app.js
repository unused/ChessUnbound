//@require @packageOverrides
Ext.Loader.setConfig({
});

Ext.application({
  name: 'ChessUnbound',
  requires: [
    'ChessUnbound.util.Helper',
    'ChessUnbound.util.Server',
    'ChessUnbound.util.Logger',
    'ChessUnbound.TableComponent',
    'ChessUnbound.ChessBoard',
    'ChessUnbound.ChessField',
    'ChessUnbound.proxy.Game',
    'ChessUnbound.proxy.OpenGame'
  ],

  models: [
    'Game',
    'User'
  ],
  stores: [
    'Games',
    'OpenGames'
  ],
  views: [
    'GameBoard',
    'GameEditor',
    'GamesList',
    'GamesListContainer',
    'JoinGamesListContainer'
  ],
  controllers: [
    'Game'
  ],

  user: {}, // loaded or generated on autoLogin

  launch: function() {
    Helper.autoLogin();
    var gamesListContainer = { xtype: 'gameslistcontainer' };
    Ext.Viewport.add(gamesListContainer);
  }
});
