
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
    console.log('in Helper.autoLogin');
    Ext.ModelMgr.getModel('ChessUnbound.model.User').load('current-user', {
      success: function(user) {
        console.log('user loaded successfully');
        me.reload(user);
      },
      failure: function() { me.generateUser(); }
    });
  },
  generateUser: function() {
    var me = this;
    Server.request('user', {}, function(response) {
      console.log('Generated User: ' + response.username);
      var user = Ext.create('ChessUnbound.model.User', {
        id: 'current-user',
        username: response.username,
        key: response.key
      });
      user.save();
      me.reload(user);
    });
  },

  reload: function(user) {
    Server.setUser(user);
    Ext.getStore('Games').load();
  }
});
