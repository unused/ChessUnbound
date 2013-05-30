Ext.define('ChessUnbound.store.GameStore', {
  extend: 'Ext.data.Store',

  requires: [
    'ChessUnbound.model.Game'
  ],

  config: {
    autoLoad: true,
    autoSync: true,
    model: 'ChessUnbound.model.Game',
    storeId: 'gamestore',
    proxy: {
      type: 'jsonp',
      url : 'http://localhost:4567',
      api: {
        create  : 'http://localhost:4567/game',
        read    : 'http://localhost:4567/games'
      }
    }
  }

});
