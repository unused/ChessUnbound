
//@require @packageOverrides
Ext.Loader.setConfig({
});

Ext.application({
  name: 'ChessUnbound',
  requires: [
    'ChessUnbound.ChessBoard',
    'ChessUnbound.proxy.Game'
  ],

  models: [
    'Game',
    'User'
  ],
  stores: [
    'Games'
  ],
  views: [
    'GameBoard',
    'GameEditor',
    'GamesList',
    'GamesListContainer'
  ],
  controllers: [
    'Game'
  ],

  user: undefined, // app user, autologged in at init

  launch: function() {
    this.autoLogIn();

    var gamesListContainer = { xtype: 'gameslistcontainer' };
    Ext.Viewport.add(gamesListContainer);
  },

  autoLogIn: function() {
    var me = this;
    console.log('autologin');
    Ext.ModelMgr.getModel('ChessUnbound.model.User').load('ext-record-1', {
      success: function(user) { ChessUnbound.app.user = user; },
      failure: function() { me.createUser(); } // does not block!?
    });
    console.log(ChessUnbound.app.user.get('username'));
    var games = Ext.getStore('Games');
    games.load();
  },

  createUser: function() {
    Ext.data.JsonP.request({
      url: 'http://localhost:4567/user',
      callbackKey: 'callback',

      callback: function(success, result) {
        var user = Ext.create('ChessUnbound.model.User', {
          username: result.username,
          key: result.key
        });
        user.save();
        ChessUnbound.app.user = user;
      }
    });
  }

});

// extending Javascript
String.prototype.repeat = function( num )
{
  return new Array( num + 1 ).join( this );
}
