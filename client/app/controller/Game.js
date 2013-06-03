Ext.define("ChessUnbound.controller.Game", {
  extend: "Ext.app.Controller",
  config: {
    refs: {
      gamesListContainer: 'gameslistcontainer',
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
        openGameCommand: 'onOpenGameCommand'
      },
      gameBoard: {
        backCommand: 'onBackToGameListCommand'
      },
      gameEditor: {
        backCommand: 'onBackToGameListCommand',
        createGameCommand: 'onCreateGameCommand'
      }
    }
  },

  onNewGameCommand: function() {
    var gameEditor = this.getGameEditor();
    Ext.Viewport.animateActiveItem(gameEditor, {type: 'slide', direction: 'left'});
  },

  onBackToGameListCommand: function() {
    console.log('onBackToGameListCommand');
    var gamesListContainer = { xtype: 'gameslistcontainer' };
    Ext.Viewport.animateActiveItem(gamesListContainer, {type: 'slide', direction: 'right'});
  },

  onOpenGameCommand: function (list, record) {
    console.log("onOpenGameCommand");
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
