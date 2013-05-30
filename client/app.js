
//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
  models: [
    'Game',
    'User'
  ],
  stores: [
    'GameStore'
  ],
  views: [
    'HomePanel',
    'GameEditorPanel'
  ],
  controllers: [
    'HomeController'
  ],
  name: 'ChessUnbound',

  user: '',

  launch: function() {
    Ext.create('ChessUnbound.view.HomePanel', {fullscreen: true});
  }

});
