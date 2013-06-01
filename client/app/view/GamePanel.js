
Ext.define('ChessUnbound.view.GamePanel', {
  extend: 'Ext.Panel',

  id: 'chessboard',

  config: {
    layout: {
      type: 'fit'
    },
    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        title: 'ChessUnbound - Game'
      }
    ],
    listeners: [
    ]
  }

});
