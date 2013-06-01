Ext.define('ChessUnbound.store.GameStore', {
  extend: 'Ext.data.Store',

  requires: [
    'ChessUnbound.model.Game'
  ],

  config: {
    model: 'ChessUnbound.model.Game',
    storeId: 'gamestore'
  }

});
