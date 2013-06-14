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
    var game = this.getRecord();
    this.setChessBoard(game.get('fen'));
  },

  setChessBoard: function(fen) {
    var chess_board = Ext.fly('chess_board');
    if(chess_board) chess_board.dom.remove();
    this.add([ ChessUnbound.ChessBoard.tableByFen(fen) ]);
  },

  onBackButtonTap: function() {
    this.fireEvent("backCommand", this);
  },

  // move to controller!!!
  onMoveFieldTap: function(field) {
    console.log('in onMoveFieldTap');
    if(this.selectedField() === false) {
      if(field.innerHTML != '') { field.className = 'field selected'; }
    } else {
      this.sendMove(this.selectedField(), field);
    }
  },

  selectedField: function() {
    var field = Ext.fly('chess_board').select('td.selected').elements;
    return (field.length == 1) ? field[0] : false;
  },

  sendMove: function(from, to) {
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
        Ext.Msg.alert(response.status, '', Ext.emptyFn);
        me.setChessBoard(response.fen);
        // me.onBackButtonTap();
      }
      Ext.Viewport.setMasked(false);
    });
  },

  clearFieldSelection: function() {
    var fields = Ext.fly('chess_board').select('td').elements;
    for(var i=0; i < fields.length; i++) {
      fields[i].className = 'field';
    }
  }


});
