Ext.define("ChessUnbound.view.GamesList", {
  extend: "Ext.dataview.List",
  alias: "widget.gameslist",

  config: {
    loadingText: "Loading Games...",
    emptyText: '<div class="games-list-empty-text">No games found.</div>',
    itemTpl:
      '<div class="list-item-title game">{name}</div>' +
      '<tpl if="status == \'waiting\'"><div class="list-item-status waiting">waiting for other player</div></tpl>'
  }
});
