describe("ChessBoard", function() {

  beforeEach(function() {
    this.board = ChessUnbound.ChessBoard;
  });

  it("can html chess piece character by fen notation", function() {
    expect(this.board.parseFen('P', {columns: []}))
      .toEqual({ columns : [ { html : '&#9817;' } ] });
    expect(this.board.parseFen('p', {columns: []}))
      .toEqual({ columns : [ { html : '&#9823;' } ] });
  });

  it("can add empty fields to a row definition", function() {
    var row = { columns: [] };
    expect(this.board.addEmptyFields(4, row).columns.length)
      .toEqual(4);
  });

  it("can handle a row in fen notation", function() {
    var row = { columns: [] };
    expect(this.board.parseFen("5", row).columns.length)
      .toEqual(5);
    row = { columns: [] };
    expect(this.board.parseFen("r", row).columns)
      .toEqual([{html: "&#9820;"}]);
  });

  it("can convert fen code to a html chess table", function() {
    var fen = "rn4nr/ppp4p/3q3P/2k2p1R/PP2P3/3P1N2/4KbP1/RN6 b - - 0 22",
        result = '<table id="chess_board"><tbody><tr><td class="field">♜</td><td class="field">♞</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♞</td><td class="field">♜</td></tr><tr><td class="field">♟</td><td class="field">♟</td><td class="field">♟</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♟</td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♛</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♙</td></tr><tr><td class="field"></td><td class="field"></td><td class="field">♚</td><td class="field"></td><td class="field"></td><td class="field">♟</td><td class="field"></td><td class="field">♖</td></tr><tr><td class="field">♙</td><td class="field">♙</td><td class="field"></td><td class="field"></td><td class="field">♙</td><td class="field"></td><td class="field"></td><td class="field"></td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♙</td><td class="field"></td><td class="field">♘</td><td class="field"></td><td class="field"></td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♕</td><td class="field">♝</td><td class="field">♙</td><td class="field"></td></tr><tr><td class="field">♖</td><td class="field">♘</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td></tr><tr><td class="info-message" colspan="8">it\'s blacks turn</td></tr></tbody></table>';
    expect(this.board.tableByFen(fen).innerHtmlElement.dom.innerHTML)
      .toEqual(result);
  });

});
