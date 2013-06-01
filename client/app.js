
//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
  name: 'ChessUnbound',
  requires: ['ChessUnbound.proxy.Game'],

  models: ['Game', 'User'],
  stores: ['GameStore'],
  views: [
    'HomePanel',
    'GameEditorPanel',
    'GamePanel'
  ],
  controllers: ['HomeController'],

  user: '',

  launch: function() {
    Ext.create('ChessUnbound.view.HomePanel', {fullscreen: true});
  }

});
