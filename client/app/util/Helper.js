
// extending Javascript
String.prototype.repeat = function( num )
{
  return new Array( num + 1 ).join( this );
}

// Application Helper
Ext.define('ChessUnbound.util.Helper', {
  singleton : true,
  alternateClassName : 'Helper',
  autoLogin: function() {
    var me = this;
    Logger.log('[Helper] auto login');
    Ext.ModelMgr.getModel('ChessUnbound.model.User').load('current-user', {
      success: function(user) {
        Logger.log('[Helper] user loaded successfully');
        Server.setUser(user);
        Ext.getStore('Games').load();
      },
      failure: function() { me.generateUser(); }
    });
  },
  generateUser: function() {
    var me = this;
    Logger.log('[Helper] generate new user');
    Server.request('user', {}, function(response) {
      Logger.log('[Helper] generated user: ' + response.username);
      var user = Ext.create('ChessUnbound.model.User', {
        id: 'current-user',
        username: response.username,
        key: response.key
      });
      user.save({
        success: function() { Server.setUser(user); }
      });
    });
  }
});
