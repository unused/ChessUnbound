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
    console.log('onBackToGameListCommand');
    Ext.getStore('Games').load();
    var gamesListContainer = this.getGamesListContainer();
    Ext.Viewport.animateActiveItem(gamesListContainer, {type: 'slide', direction: 'right'});
  },

  onJoinGameCommand: function(list, record) {
    var me = this;
    Server.request('game/join/'+record.get('_id'), {}, function() {
      console.log('success');
      me.onBackToGameListCommand();
    });
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
    console.log(Server.getUser());
    Server.request('game', {
      name: Ext.ComponentQuery.query('#nameField')[0].getValue()
    });
    Ext.getStore('Games').load();
    var gamesListContainer = { xtype: 'gameslistcontainer' };
    Ext.Viewport.animateActiveItem(gamesListContainer, {type: 'slide', direction: 'right'});
  },

});
