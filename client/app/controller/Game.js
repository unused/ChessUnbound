Ext.define("ChessUnbound.controller.Game", {
  extend: "Ext.app.Controller",
  config: {
    refs: {
      gamesListContainer: 'gameslistcontainer',
      joinGamesListContainer: 'joingameslistcontainer',
      gameBoard: {
        autoCreate: true,
        selector: 'gameboard',
        xtype: 'gameboard'
      },
      gameEditor: {
        autoCreate: true,
        selector: 'gameeditor',
        xtype: 'gameeditor'
      }
    },
    control: {
      gamesListContainer: {
        newGameCommand: 'onNewGameCommand',
        openGameCommand: 'onOpenGameCommand',
        joinGameCommand: 'onJoinGamesListContainerCommand'
      },
      gameBoard: {
        backCommand: 'onBackToGameListCommand'
      },
      gameEditor: {
        backCommand: 'onBackToGameListCommand',
        createGameCommand: 'onCreateGameCommand'
      },
      joinGamesListContainer: {
        joinGameCommand: 'onJoinGameCommand',
        backCommand: 'onBackToGameListCommand'
      }
    }
  },

  onNewGameCommand: function() {
    var gameEditor = this.getGameEditor();
    Ext.Viewport.animateActiveItem(gameEditor, {type: 'slide', direction: 'left'});
  },

  onBackToGameListCommand: function() {
    var games = Ext.getStore('Games');
    games.load();
    var gamesListContainer = this.getGamesListContainer();
    Ext.Viewport.animateActiveItem(gamesListContainer, {type: 'slide', direction: 'right'});
  },

  onJoinGameCommand: function() {
    console.log('onJoinGameCommand');
  },

  onJoinGamesListContainerCommand: function() {
    // var joinGamesListContainer = this.getJoinGamesListContainer();
    // Ext.Viewport.animateActiveItem(joinGamesListContainer, {type: 'slide', direction: 'left'});
    var joinGamesListContainer = { xtype: 'joingameslistcontainer' };
    Ext.Viewport.animateActiveItem(joinGamesListContainer, {type: 'slide', direction: 'left'});
  },

  onOpenGameCommand: function (list, record) {
    this.openGameBoard(record);
  },

  openGameBoard: function (record) {
    var gameBoard = this.getGameBoard();
    gameBoard.setRecord(record);
    gameBoard.init();
    Ext.Viewport.animateActiveItem(gameBoard, {type: 'slide', direction: 'left'});
  },

  onCreateGameCommand: function() {
    console.log('onCreateGameCommand');
    var gameName = Ext.ComponentQuery.query('#nameField')[0].getValue();
    console.log(gameName);
    var game = Ext.create('ChessUnbound.model.Game', { name: gameName });
    // FIXME does not send any information (name)
    // game.save({
    //   success: function(game) {
    //     console.log("Saved Game! New ID is "+ game.getId());
    //   }
    // });
    // NOTE workaround
    Ext.data.JsonP.request({
      url: 'http://localhost:4567/game',
      params: {
        name: gameName,
        username: ChessUnbound.app.user.get('username'),
        key: ChessUnbound.app.user.get('key')
      }
    });

    var games = Ext.getStore('Games');
    games.load();
    var gamesListContainer = { xtype: 'gameslistcontainer' };
    Ext.Viewport.animateActiveItem(gamesListContainer, {type: 'slide', direction: 'right'});
  },

});
