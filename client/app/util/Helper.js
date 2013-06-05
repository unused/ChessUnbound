
// extending Javascript
String.prototype.repeat = function( num )
{
  return new Array( num + 1 ).join( this );
}

Ext.define('ChessUnbound.util.Helper', {
  singleton : true,
  alternateClassName : 'Helper'
});
