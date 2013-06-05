
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
        console.log('Server failed request ' + action);
        console.log(response)
      }
    });
  },
  authenticate: function() {
    if(this.getUser() !== {}) {
      this.params.username = this.getUser().username;
      this.params.key = this.getUser().key;
    }
  }

});
