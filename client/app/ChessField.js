Ext.define('ChessUnbound.ChessField', {
  constructor: function(field) {
    var alph = ['a','b','c','d','e','f','g','h'],
      col = field.cellIndex,
      row = field.parentNode.rowIndex;
    this.move = alph[row] + (8-col).toString();
    return this;
  }
});
