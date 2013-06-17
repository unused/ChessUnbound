Ext.define('ChessUnbound.proxy.OpenGame', {
  extend: 'Ext.data.proxy.Proxy',
  alias: 'proxy.opengame',

  create: function(operation, callback, scope) {
    Logger.error('method not available!');
  },
  read: function(operation, callback, scope) {
    Server.request('opengames', {}, function(response) {
      scope.setData(response);
    });
  },
  update: function(operation, callback, scope) {
    Logger.error('method not available!');
  },
  destroy: function(operation, callback, scope) {
    Logger.error('method not available!');
  }
});
