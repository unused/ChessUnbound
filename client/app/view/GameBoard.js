Ext.define("ChessUnbound.view.GameBoard", {
  extend: "Ext.Panel",
  alias: "widget.gameboard",

  initialize: function () {
    this.callParent(arguments);

    var backButton = {
      xtype: "button",
      ui: "back",
      text: "Back",
      scope: this,
      handler: this.onBackButtonTap
    };
    var topToolbar = {
      xtype: "toolbar",
      docked: "top",
      title: "ChessUnbound",
      items: [ backButton ]
    };
    var chessBoard = {
      xtype: "container",
      itemId: "chessboard",
      pack: "center",
      html: ""
    };
    this.add( [ topToolbar, chessBoard ] );
  },

  init: function() {
    var me = this,
      game = me.getRecord(),
      board = me.getComponent('chessboard');
    board.set('html', ChessUnbound.ChessBoard.htmlByFen(game.get('fen')));
  },

  onBackButtonTap: function() {
    this.fireEvent("backCommand", this);
  }

});
