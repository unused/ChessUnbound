
Ext.define('ChessUnbound.util.Server', {
  singleton: true,
  alternateClassName: 'Server',
  config: {
    baseUrl: 'http://localhost:4567/',
    user: {}
  },
  params: {},
  request: function(action, params, success) {
    this.params = params;
    this.authenticate();
    Ext.data.JsonP.request({
      url: this.config.baseUrl + action,
      params: this.params,
      success: success,
      failure: function(response) {
        Logger.error('[Server] failed request ' + action, response);
      }
    });
  },
  authenticate: function() {
    var user = this.getUser();
    if(user !== undefined) {
      Ext.apply(this.params, {
        username: user.get('username'),
        key: user.get('key')
      });
    }
  }

});
