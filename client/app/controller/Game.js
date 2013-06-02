Ext.define("ChessUnbound.controller.Game", {
  extend: "Ext.app.Controller",
  config: {
    refs: {
      gamesListContainer: "gameslistcontainer",
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
        newGameEvent: "onNewGame"
        // abortGameEvent: "onAbortGame"
      }
    }
  },

  onNewGame: function() {
    var gameEditor = this.getGameEditor();
    Ext.Viewport.animateActiveItem(gameEditor, {type: 'slide', direction: 'left'});
  },

  onAbortGame: function(list, record) {
    console.log("onAbortGame pending"); // TODO pending
  },

  onOpenGameEvent: function () {
    console.log("onOpenGameEvent");
    openGameBoard(); // TODO set record
  },

  openGameBoard: function () { // TODO set record) {
    var gameBoard = this.getGameBoard();
    // gameBoard.setRecord(record); // TODO set record
    Ext.Viewport.animateActiveItem(gameBoard, {type: 'slide', direction: 'left'});
  }

});
