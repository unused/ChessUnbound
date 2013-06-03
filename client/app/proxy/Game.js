/**
 * @class Ext.data.GameProxy
 * @extends Ext.data.proxy.JsonP
 *
 */
Ext.define('ChessUnbound.proxy.Game', {
  extend: 'Ext.data.proxy.JsonP',
  alias: 'proxy.game',

  config: {
    url: 'http://localhost:4567',

    api: {
      create  : '/game',
      read    : '/games'
    }
  },

  buildRequest: function(operation) {
    var request = this.callParent(arguments),
        params  = request.getParams(),
        user = ChessUnbound.app.user;

    if(user != undefined)
      Ext.apply(params, {
        username: user.get('username'),
        key: user.get('key')
      });

    request.setParams(params);
    request.setUrl(this.getUrl() + this.buildUrl(request));

    return request;
  }
});
