describe("App", function() {

  it("extended String.repeat should repeat string", function() {
    expect(" doh! ".repeat(3)).toEqual(" doh!  doh!  doh! ");
    expect("highlander".repeat(1)).toEqual("highlander");
    expect("harry potter".repeat(0)).toEqual("");
  });

});
