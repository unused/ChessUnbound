Ext.define('ChessUnbound.ChessBoard', {
  singleton: true,

  tableByFen: function(fen) {
    var rows = [],
        row = { columns: [] },
        index = 0
        board_delimiter = ' '
        row_delimiter = '/';
    while(fen[index] != board_delimiter) {
      if(fen[index] == row_delimiter) {
        rows.push(row);
        row = { columns: [] };
      } else {
        row = this.parseFen(fen[index], row);
      }
      index++;
    }
    rows.push(row);

    var info_message = fen[++index] == 'w' ? 'white' : 'black';
    var data = { id: 'chess_board', rows: rows, info: 'it\'s '+info_message+'s turn' };
    return Ext.create('ChessUnbound.TableComponent', { data: data });
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
    for(var empty_fields=0;empty_fields<times;empty_fields++)
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
        piece = "&#9813;";
      break;
      case "K":
        piece = "&#9812;";
      break;
    }
    return piece;
  }

});
