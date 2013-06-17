Ext.define('ChessUnbound.ChessBoard', {
  singleton: true,

  tableByFen: function(fen) {
    var rows = [],
        row = { columns: [] },
        i = 0;
    while(fen[i] != ' ') {
      if(fen[i] == "/") {
        rows.push(row);
        row = { columns: [] };
      } else {
        row = this.parseFen(fen[i], row);
      }
      i++;
    }
    rows.push(row);

    var info = fen[++i] == 'w' ? 'white' : 'black';
    var data = { id: 'chess_board', rows: rows, info: 'it\'s '+info+'s turn' };
    var table = Ext.create('ChessUnbound.TableComponent', { data: data });

    return table;
  },

  parseFen: function(fen, row) {
    var piece = this.chessPieceByFen(fen);
    if(piece === "")
      row = this.addEmptyFields(parseInt(fen), row);
    else
      row.columns.push({ html: piece });
    return row;
  },

  addEmptyFields: function(times, row) {
    for (var i=0;i<times;i++)
      row.columns.push({ html: '' });
    return row;
  },

  chessPieceByFen: function(notation) {
    var piece = "";
    switch(notation) {
      case "p":
        piece = "&#9823;";
      break;
      case "r":
        piece = "&#9820;";
      break;
      case "n":
        piece = "&#9822;";
      break;
      case "b":
        piece = "&#9821;";
      break;
      case "q":
        piece = "&#9819;";
      break;
      case "k":
        piece = "&#9818;";
      break;

      case "P":
        piece = "&#9817;";
      break;
      case "R":
        piece = "&#9814;";
      break;
      case "N":
        piece = "&#9816;";
      break;
      case "B":
        piece = "&#9815;";
      break;
      case "Q":
        piece = "&#9812;";
      break;
      case "K":
        piece = "&#9813;";
      break;
    }
    return piece;
  }

});
