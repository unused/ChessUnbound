
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
    'Games',
    'OpenGames'
  ],
  views: [
    'GameBoard',
    'GameEditor',
    'GamesList',
    'GamesListContainer',
    'JoinGamesListContainer'
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
    // FIXME fix this mess
    console.log('autologin');
    Ext.ModelMgr.getModel('ChessUnbound.model.User').load('ext-record-1', {
      success: function(user) {
        ChessUnbound.app.user = user;
        var games = Ext.getStore('Games');
        games.load();
      },
      failure: function() { me.createUser(); }
    });
    console.log('after autologin');
  },

  createUser: function() {
    return Ext.data.JsonP.request({
      url: 'http://localhost:4567/user',
      callbackKey: 'callback',

      callback: function(success, result) {
        console.log('createUser callback started');
        var user = Ext.create('ChessUnbound.model.User', {
          username: result.username,
          key: result.key
        });
        user.save();
        ChessUnbound.app.user = user;
        var games = Ext.getStore('Games');
        games.load();
        console.log('createUser callback finished');
      }
    });
  }

});

// extending Javascript
String.prototype.repeat = function( num )
{
  return new Array( num + 1 ).join( this );
}
