describe("Server", function() {

  it("can add username and key to authenticate", function() {
    expect(Server.params).toEqual({});
    expect(Server.getUser()).toEqual(undefined);
    var user = {username: 'klaus', key: 'private-key-42'};
    Server.setUser(user);
    Server.authenticate();
    expect(Server.params).toEqual(user)
  });

});
