Ext.define("ChessUnbound.view.GameBoard", {
  extend: "Ext.Panel",
  alias: "widget.gameboard",

  initialize: function () {
    this.callParent(arguments);
    // TODO set chess board
    var backButton = {
      xtype: "button",
      ui: "back",
      text: "Home",
      handler: this.onBackButtonTap
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
      pack: 'center',
      html: ''
    }
    this.add( [ topToolbar, chessBoard ] );
  },

  init: function() {
    var me = this,
      game = me.getRecord(),
      board = me.getComponent('chessboard');
    board.set('html', ChessUnbound.ChessBoard.htmlByFen(game.get('fen')));
  },

  onBackButtonTap: function () {
    console.log("backCommand");
    this.fireEvent("backCommand", this);
  }

});
