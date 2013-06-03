Ext.define('ChessUnbound.view.GameEditor', {
  extend: 'Ext.Panel',
  alias: 'widget.gameeditor',

  config: {
    layout: {
      type: 'vbox'
    },
    items: [
      {
      xtype: 'fieldset',
      title: 'New Game',
      items: [
        {
        xtype: 'textfield',
        label: 'Game Name',
        itemId: 'nameField',
        name: 'name'
      }
      ]
    },
    {
      xtype: 'toolbar',
      docked: 'bottom',
      items: [
        {
        xtype: 'button',
        itemId: 'abortBtn',
        ui: 'decline',
        text: 'Back'
      },
      {
        xtype: 'spacer'
      },
      {
        xtype: 'button',
        itemId: 'createGameBtn',
        ui: 'confirm',
        text: 'Create'
      }
      ]
    }
    ],
    listeners: [
      {
      fn: 'onAbortBtnTap',
      event: 'tap',
      delegate: '#abortBtn'
    },
    {
      fn: 'onCreateBtnTap',
      event: 'tap',
      delegate: '#createGameBtn'
    }
    ]
  },

  onAbortBtnTap: function(button, e, eOpts) {
    console.log('backCommand');
    this.fireEvent("backCommand", this);
  },

  onCreateBtnTap: function(button, e, eOpts) {
    console.log('createGameCommand');
    this.fireEvent("createGameCommand", this);
  }

});
