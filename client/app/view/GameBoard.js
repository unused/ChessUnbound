Ext.define("ChessUnbound.view.GameBoard", {
  extend: "Ext.Panel",
  alias: "widget.gameboard",

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
      docked: "top",
      title: "ChessUnbound",
      items: [ backButton ]
    };
    this.add( [ topToolbar ] );
  },

  init: function() {
    console.log('GameBoard init');
    var me = this;
    me.refresh = true;
    me.setChessBoard();
    window.setTimeout(function() { me.refreshChessBoard(); },3000);
  },

  refreshChessBoard: function() {
    console.log('refreshChessBoard');
    var me = this;
    if(me.selectedField() === false) { // && !me.getRecord().is_my_turn()) {
      console.log('refreshing');
      me.getRecord().refresh(function() {
        me.setChessBoard();
      });
    }
    if(me.refresh) window.setTimeout(function() { me.refreshChessBoard(); }, 1000);
  },

  setChessBoard: function() {
    console.log('setChessBoard');
    var game = this.getRecord(),
        chess_board = Ext.fly('chess_board');
    this.items.items[0].setTitle((game.is_my_turn()?'your':'opponent') + ' turn');
    if(chess_board) chess_board.dom.remove();
    this.add([ ChessUnbound.ChessBoard.tableByFen(game.get('fen')) ]);
  },

  onBackButtonTap: function() {
    this.refresh = false;
    this.fireEvent("backCommand", this);
  },

  onMoveFieldTap: function(field) {
    console.log('in onMoveFieldTap');
    if(this.getRecord().is_my_turn()) {
      if(this.selectedField() === false) {
        if(field.innerHTML != '') { field.className = 'field selected'; }
      } else {
        this.sendMove(this.selectedField(), field);
      }
    }
  },

  selectedField: function() {
    var field = Ext.fly('chess_board').select('td.selected').elements;
    return (field.length == 1) ? field[0] : false;
  },

  sendMove: function(from, to) {
    console.log('sendMove');
    var me = this,
      game_id = this.getRecord().get('_id'),
      move = new ChessUnbound.ChessField(from).move +
          new ChessUnbound.ChessField(to).move;
    Ext.Viewport.setMasked({xtype:'loadmask',message:"Please wait...\nvalidating move"});
    Server.request('move/'+game_id+'/'+move, {}, function(response) {
      if(response.valid == false) {
        Ext.Msg.alert('Invalid Move', 'please make a valid move', Ext.emptyFn);
        me.clearFieldSelection();
      } else {
        if(response.status != 'in_progress') { // game finished?
          Ext.Msg.alert(response.status, '', function() {
            me.onBackButtonTap();
          });
          // me.onBackButtonTap();
        } else {
          me.getRecord().set('fen', response.fen);
          me.setChessBoard();
        }
      }
      Ext.Viewport.setMasked(false);
    });
  },

  clearFieldSelection: function() {
    console.log('clearFieldSelection');
    var fields = Ext.fly('chess_board').select('td').elements;
    for(var i=0; i < fields.length; i++) {
      fields[i].className = 'field';
    }
  }


});
