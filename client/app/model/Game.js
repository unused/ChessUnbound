Ext.define('ChessUnbound.model.Game', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {name: "_id", type: "string"},
      {name: "name", type: "string"},
      {name: "fen", type: "string"},
      {name: "white", type: "string"},
      {name: "black", type: "string"},
      {name: "status", type: "string"},
      {name: "status_message", type: "string"}
    ]
  },

  constructor: function(data, id, raw, convertedData) {
    this.callParent(arguments);
    this.set('status_message', this.status_message());
  },

  is_my_turn: function() {
    var user = Server.getUser();
    var turn_color = this.get('fen').match(/\s(w|b)\s/)[0];
    if(this.get('black') == user.get('username')) // me is black
      return (turn_color == ' b ');
    else // me is white
      return (turn_color == ' w ');
  },

  status_message: function() {
    var msg = '';
    if(this.get('status') == 'playing') {
      if(this.is_my_turn()) msg = 'playing - your turn';
      else msg = 'playing - opponent turn';
    } else if(this.get('status') == 'waiting') {
      msg = 'waiting - for other player to join';
    } else if(this.get('finished') == 'finished') {
      if(this.is_my_turn()) msg = 'finished - you won';
      else msg = 'finished - you lost';
    }
    return msg;
  },

  refresh: function(callback) {
    var me = this;
    Ext.getStore('Games').load().data.each(function() {
      if(this.get('_id') == me.get('_id')) me.set(this.data);
    });
    callback();
  }
});
