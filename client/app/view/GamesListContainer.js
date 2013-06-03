Ext.define("ChessUnbound.view.GamesListContainer", {
  extend: "Ext.Container",
  alias: "widget.gameslistcontainer",
  config: {
    layout: {
      type: 'fit'
    }
  },

  initialize: function () {
    this.callParent(arguments);

    var newButton = {
      xtype: "button",
      text: 'New Game',
      ui: 'action',
      handler: this.onNewButtonTap,
      scope: this
    };

    var topToolbar = {
      xtype: "toolbar",
      title: 'ChessUnbound',
        // + ChessUnbound.app.user.get('username'),
      docked: "top",
      items: [
        { xtype: 'spacer' },
        newButton
      ],
    };
    var gamesList = {
      xtype: "gameslist",
      store: Ext.getStore('Games'),
      listeners: {
        disclose: { fn: this.onGamesListDisclose, scope: this } // TODO ?
      }
    };

    this.add([topToolbar, gamesList]);
  },

  onGamesListDisclose: function (list, record, target, index, evt, options) {
    console.log("openGameCommand");
    this.fireEvent('openGameCommand', this, record);
  },

  onNewButtonTap: function () {
    console.log("newGameCommand");
    this.fireEvent("newGameCommand", this);
  }

});
