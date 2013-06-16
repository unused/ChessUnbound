describe("ChessUnbound.ChessBoard", function() {

  it("can convert fen code to a html chess table", function() {
    var fen = "rn4nr/ppp4p/3q3P/2k2p1R/PP2P3/3P1N2/4KbP1/RN6 b - - 0 22",
        result = '<table id="chess_board"><tbody><tr><td class="field">♜</td><td class="field">♞</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♞</td><td class="field">♜</td></tr><tr><td class="field">♟</td><td class="field">♟</td><td class="field">♟</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♟</td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♛</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♙</td></tr><tr><td class="field"></td><td class="field"></td><td class="field">♚</td><td class="field"></td><td class="field"></td><td class="field">♟</td><td class="field"></td><td class="field">♖</td></tr><tr><td class="field">♙</td><td class="field">♙</td><td class="field"></td><td class="field"></td><td class="field">♙</td><td class="field"></td><td class="field"></td><td class="field"></td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♙</td><td class="field"></td><td class="field">♘</td><td class="field"></td><td class="field"></td></tr><tr><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field">♕</td><td class="field">♝</td><td class="field">♙</td><td class="field"></td></tr><tr><td class="field">♖</td><td class="field">♘</td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td><td class="field"></td></tr><tr><th colspan="8">player: black</th></tr></tbody></table>';
    expect(ChessUnbound.ChessBoard.tableByFen(fen).innerHtmlElement.dom.innerHTML)
      .toEqual(result);
  });

});
