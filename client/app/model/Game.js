Ext.define('ChessUnbound.model.Game', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {name: "_id", type: "string"},
      {name: "name", type: "string"},
      {name: "fen", type: "string"},
      {name: "white", type: "string"},
      {name: "black", type: "string"},
      {name: "status", type: "string"}
    ],
    proxy: {
      type: 'game'
    }
  }
});
