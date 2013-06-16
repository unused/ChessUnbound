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
    ]
  },
  is_my_turn: function() {
    var user = Server.getUser();
    var turn_color = this.get('fen').match(/\s(w|b)\s/)[0];
    if(this.get('black') == user.get('username')) // me is black
      return (turn_color == ' b ');
    else // me is white
      return (turn_color == ' w ');
  },
  refresh: function(callback) {
    var me = this;
    console.log('in refresh');
    Ext.getStore('Games').load().data.each(function() {
      console.log(this.get('_id') == me.get('_id'));
      if(this.get('_id') == me.get('_id')) me.set(this.data);
      if(this.get('_id') == me.get('_id')) {
        console.log('game found', this);
      }
    });
    console.log(me.get('fen'));
    callback();
  }
});
