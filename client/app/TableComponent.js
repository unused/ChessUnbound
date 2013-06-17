Ext.define('ChessUnbound.TableComponent', {
  extend: 'Ext.Container',

  config: {
    tpl: Ext.create('Ext.XTemplate',
      '<table id="{id}">',
        '<tpl for="rows">',
          '<tr>',
            '<tpl for="columns">',
              '<td class="field">{html}</td>',
            '</tpl>',
          '</tr>',
        '</tpl>',
        '<tr><td class="info-message" colspan="8">{info}</td></tr>',
      '</table>'
    ),
    listeners  : {
      element : 'element',
      tap     : function() {
        var field = arguments[1];
        if(field.className == 'field') {
          this.parent.onMoveFieldTap(field);
        }
      }
    }
  }
});
