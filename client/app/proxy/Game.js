Ext.define('ChessUnbound.proxy.Game', {
  extend: 'Ext.data.proxy.Proxy',
  alias: 'proxy.game',

  create: function(operation, callback, scope) {
    Server.request('game', {}, callback);
  },
  read: function(operation, callback, scope) {
    Server.request('games', {}, function(response) {
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
