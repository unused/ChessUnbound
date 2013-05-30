Ext.define('ChessUnbound.model.Game', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {
        name: 'name',
        status: 'status'
      }
    ]
  }
});
