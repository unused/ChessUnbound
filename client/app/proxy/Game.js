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
    // reader: {
    //   type: 'json',
    // }
  },

  buildRequest: function(operation) {
    var request = this.callParent(arguments),
        params  = request.getParams();
    console.log(params);

    // Ext.apply(params, {
    //   name: 'test' // pass in the query string to the search api
    // });

    request.setParams(params);
    request.setUrl(this.getUrl() + this.buildUrl(request));

    return request;
  }
});
