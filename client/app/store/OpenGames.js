Ext.define('ChessUnbound.store.OpenGames', {
  extend: 'Ext.data.Store',

  requires: [
    'ChessUnbound.model.Game'
  ],

  config: {
    model: 'ChessUnbound.model.Game'
  }

});
