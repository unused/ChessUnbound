
Ext.define('ChessUnbound.controller.HomeController', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      home: 'home',
      gameEditor: {
        autoCreate: true,
        selector: 'gameeditor',
        xtype: 'gameditor'
      }
    },

    control: {
      "panel": {
        backToHomeCommand: 'onBackToHomeCommand',
        newGameCommand: 'onNewGameCommand',
        createGameCommand: 'onCreateGameCommand'
      }
    }
  },

  onBackToHomeCommand: function() {
    Ext.Viewport.animateActiveItem(this.getHome(), {type: 'slide', direction: 'right'});
  },

  onNewGameCommand: function() {
    Ext.Viewport.animateActiveItem(this.getGameEditor(), {type: 'slide', direction: 'left'});
  },

  onCreateGameCommand: function() {
    var gameName = Ext.ComponentQuery.query('#nameField')[0].getValue();
    var games = Ext.getStore('gamestore');
    games.load();
    var game = Ext.create('ChessUnbound.model.Game', { name: gameName });
    games.add(game);
    games.sync();
    Ext.Viewport.animateActiveItem(this.getHome(), {type: 'slide', direction: 'right'});
  },

  init: function() {
    var user = Ext.ModelMgr.getModel('ChessUnbound.model.User').load('ext-record-1', {
      success: function(user) { ChessUnbound.app.user = user; },
      failure: function() {
        return Ext.data.JsonP.request({
          url: 'http://localhost:4567/user',
          callbackKey: 'callback',

          callback: function(success, result) {
            var user = Ext.create('ChessUnbound.model.User', {
              username: result.username,
              key: result.key
            });
            user.save();
            ChessUnbound.app.user = user;
          }
        });
      }
    });
    console.log(ChessUnbound.app.user.get('username'));
    Ext.getStore('gamestore').getProxy().setExtraParam(
      'username', ChessUnbound.app.user.get('username'));
    Ext.getStore('gamestore').getProxy().setExtraParam(
      'key', ChessUnbound.app.user.get('key'));
  }

});
