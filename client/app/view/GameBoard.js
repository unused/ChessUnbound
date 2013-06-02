Ext.define("ChessUnbound.view.GameBoard", {
  extend: "Ext.form.Panel",
  alias: "widget.gameboard",
  config:{
    scrollable:'vertical'
  },

  initialize: function () {
    this.callParent(arguments);
    // TODO set chess board
    var backButton = {
      xtype: "button",
      ui: "back",
      text: "Home"
    };
    var topToolbar = {
      xtype: "toolbar",
      docked: "top",
      title: "chess board",
      items: [ backButton ]
    };
    var chessBoard = {
      xtype: "container",
      itemId: "chessboard",
      html: ''
    }
    this.add( [ topToolbar, chessBoard ] );
  },

  init: function() {
    var me = this,
      game = me.getRecord()
      board = me.getComponent('chessboard');
    board.set('html', ChessUnbound.ChessBoard.htmlByFen(game.get('fen')));
  }
});
