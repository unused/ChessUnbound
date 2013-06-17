Ext.define('ChessUnbound.util.Logger', {
  singleton : true,
  alternateClassName : 'Logger',

  log: function(msg) {
    console.log(msg);
  },
  debug: function(mgs) {
    console.debug(msg);
  },
  event: function(msg) {
    console.log(msg);
  },
  error: function(mgs) {
    console.error(msg);
  }
});
