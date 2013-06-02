Ext.define("ChessUnbound.view.GameBoard", {
  extend: "Ext.form.Panel",
  alias: "widget.gameboard",
  config:{
    scrollable:'vertical'
  },

  initialize: function () {
    this.callParent(arguments);
    // TODO set chess board
  }
});
