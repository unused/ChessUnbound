describe("ChessField", function() {

  it("can convert a table field to chess position", function() {
    var ChessFieldSpecTableCell = new Ext.Class({ // HTML Table Cell Stub
      constructor: function(cellIndex, rowIndex) {
        this.cellIndex = cellIndex;
        this.parentNode = { rowIndex: rowIndex };
      }
    });

    // testing boundaries
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(0, 0)
    ).move).toEqual("a8");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(0, 7)
    ).move).toEqual("a1");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(7, 7)
    ).move).toEqual("h1");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(7, 0)
    ).move).toEqual("h8");

    // testing some mid fields
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(2, 3)
    ).move).toEqual("c5");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(3, 3)
    ).move).toEqual("d5");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(3, 4)
    ).move).toEqual("d4");
    expect(new ChessUnbound.ChessField(
      new ChessFieldSpecTableCell(4, 4)
    ).move).toEqual("e4");
  });

});
