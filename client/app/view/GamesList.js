Ext.define("ChessUnbound.view.GamesList", {
  extend: "Ext.dataview.List",
  alias: "widget.gameslist",
  config: {
    loadingText: "Loading Games...",
    emptyText: '<div class="games-list-empty-text">No games found.</div>',
    onItemDisclosure: true,
    itemTpl: '<div class="list-item-title">{name}</div><div class="list-item-status">{status}</div>'
  }
});
