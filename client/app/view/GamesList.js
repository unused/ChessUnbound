Ext.define("ChessUnbound.view.GamesList", {
  extend: "Ext.dataview.List",
  alias: "widget.gameslist",

  config: {
    loadingText: "Loading Games...",
    emptyText: '<div class="games-list-empty-text">No games found.</div>',
    itemTpl:
      '<div class="list-item-title game">{name}</div><div class="list-item-status">{status_message}</div>'
  }
});
