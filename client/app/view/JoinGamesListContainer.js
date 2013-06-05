Ext.define("ChessUnbound.view.JoinGamesListContainer", {
  extend: "Ext.Container",
  alias: "widget.joingameslistcontainer",
  config: {
    layout: {
      type: 'fit'
    }
  },

  initialize: function () {
    this.callParent(arguments);

    var backButton = {
      xtype: "button",
      ui: "back",
      text: "Back",
      scope: this,
      handler: this.onBackButtonTap
    };

    var topToolbar = {
      xtype: "toolbar",
      title: 'ChessUnbound - Join a Game',
      docked: "top",
      items: [
        backButton,
        { xtype: 'spacer' }
      ]
    };

    var games = Ext.getStore('OpenGames');
    games.load();
    var gamesList = {
      xtype: "gameslist",
      store: games,
      listeners: {
        itemtap: { fn: this.onGamesListItemTap, scope: this }
      }
    };

    this.add([topToolbar, gamesList]);
  },

  onGamesListItemTap: function (list, index, target, record, e, eOpts) {
    console.log("joinGameCommand");
    this.fireEvent('joinGameCommand', this, record);
  },

  onBackButtonTap: function () {
    console.log("backCommand");
    this.fireEvent("backCommand", this);
  }

});
