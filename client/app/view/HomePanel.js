
Ext.define('ChessUnbound.view.HomePanel', {
  extend: 'Ext.Panel',
  alias: 'widget.home',

  config: {
    layout: {
      type: 'fit'
    },
    items: [
      {
      xtype: 'toolbar',
      docked: 'top',
      title: 'ChessUnbound'
    },
    {
      xtype: 'toolbar',
      docked: 'bottom'
    },
    {
      xtype: 'button',
      docked: 'top',
      height: '45px',
      itemId: 'newGameBtn',
      iconCls: 'add',
      iconMask: true,
      text: 'New Game'
    },
    {
      xtype: 'list',
      itemTpl: [
        '<div class="game">Game: {name} - {status}</div>'
      ],
      id: 'gameList',
      store: 'gamestore'
    }
    ],
    listeners: [
      {
        fn: 'onNewGameBtnTap',
        event: 'tap',
        delegate: '#newGameBtn'
      },
      {
        fn: 'onSelectGameItemTap',
        event: 'tap',
        delegate: '#gameList'
      }
    ]
  },

  onNewGameBtnTap: function(button, e, eOpts) {
    this.fireEvent("newGameCommand", this);
  },

  onSelectGameItemTap: function(button, e, eOpts) {
    console.log('test');
    this.fireEvent("selectGameItemTap", this);
  }

});
