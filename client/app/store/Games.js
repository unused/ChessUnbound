Ext.define('ChessUnbound.store.Games', {
  extend: 'Ext.data.Store',

  requires: [
    'ChessUnbound.model.Game'
  ],

  config: {
    model: 'ChessUnbound.model.Game'
  }

});
