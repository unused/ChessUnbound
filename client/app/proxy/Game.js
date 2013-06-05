/**
 * @class ChessUnbound.proxy.Game
 * @extends Ext.data.proxy.Proxy
 */
Ext.define('ChessUnbound.proxy.Game', {
  extend: 'Ext.data.proxy.Proxy',
  alias: 'proxy.game',

  create: function(operation, callback, scope) {
    console.log('api/game');
    Server.request('game', {}, callback);
  },
  read: function(operation, callback, scope) {
    // FIXME Mask "loading Games" does not disappear on user create
    Server.request('games', {}, function(response) {
      scope.setData(response);
    });
  },
  update: function(operation, callback, scope) {
    console.error('method not available!');
  },
  destroy: function(operation, callback, scope) {
    console.error('method not available!');
  }
});
