Ext.define('ChessUnbound.model.User', {
  extend: 'Ext.data.Model',
  config: {
    fields: [ 'username', 'key' ],

    proxy: {
      type: 'localstorage',
      id: 'user-data'
    }
  }
});
