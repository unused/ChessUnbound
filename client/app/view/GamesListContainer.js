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
      docked: "top",
      items: [
        { xtype: 'spacer' },
        newButton
      ]
    };

    var gamesList = {
      xtype: "gameslist",
      store: Ext.getStore('Games'),
      listeners: {
        itemtap: { fn: this.onGamesListItemTap, scope: this }
      },
      plugins: [
        { xclass: 'Ext.plugin.PullRefresh' }
      ]
    };

    var joinButton = {
      xtype: "button",
      text: 'Join a Game',
      docked: 'bottom',
      ui: 'action',
      handler: this.onJoinButtonTap,
      scope: this
    };

    this.add([topToolbar, gamesList, joinButton]);
  },

  onGamesListItemTap: function (list, index, target, record, e, eOpts) {
    Logger.event("[GamesListContainer] openGameCommand");
    this.fireEvent('openGameCommand', this, record);
  },

  onNewButtonTap: function () {
    Logger.event("[GamesListContainer] newGameCommand");
    this.fireEvent("newGameCommand", this);
  },

  onJoinButtonTap: function () {
    Logger.event("[GamesListContainer] joinGameCommand");
    this.fireEvent("joinGameCommand", this);
  }

});
