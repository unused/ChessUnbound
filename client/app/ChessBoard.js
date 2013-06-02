Ext.define('ChessUnbound.ChessBoard', {
  singleton: true,

  htmlByFen: function(fen) {
    var board_html = '<table id="chess_board" cellpadding="0" cellspacing="0">',
      me = this;
    board_html += "<tr>";
    for(var i=0; fen[i] != ' '; i++) {
      if(fen[i] == "/")
        board_html += "</tr><tr>";
      else
        board_html += '<td>' + me.chessPieceByFen(fen[i]) + '</td>';
    }
    board_html += "</tr>";
    board_html += '</table>';
    return board_html;
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
      default:
        console.log(notation);
        console.log(parseInt(notation));
        piece = "&nbsp;</td><td>&nbsp;".repeat(parseInt(notation - 1));
    }
    return piece;
  }

});
