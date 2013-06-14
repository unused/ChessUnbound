describe("Server", function() {

  it("can add username and key to authenticate", function() {
    expect(Server.params).toEqual({});
    expect(Server.getUser()).toEqual(undefined);
    var UtilServerSpecUser = new Ext.Class({
      get: function(key) {
        if(key == 'username') return 'Klaus';
        if(key == 'key') return 'my-private-key';
      }
    });
    Server.setUser(new UtilServerSpecUser());
    Server.authenticate();
    expect(Server.params).toEqual({username: 'Klaus', key: 'my-private-key'});
  });

});
