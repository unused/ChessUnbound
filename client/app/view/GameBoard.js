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
    var fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    var chessBoard = {
      xtype: "container",
      html: ChessUnbound.ChessBoard.htmlByFen(fen)
    }
    this.add( [ topToolbar, chessBoard ] );
  }
});
