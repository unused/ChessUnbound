
Ext.define('ChessUnbound.view.HomePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.home',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'ChessUnbound'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            },
            {
                xtype: 'button',
                docked: 'top',
                height: '45px',
                itemId: 'newGameBtn',
                iconCls: 'add',
                iconMask: true,
                text: 'New Game'
            },
            {
                xtype: 'list',
                itemTpl: [
                    '<div class="game">Game {name} {status}</div>'
                ],
                store: 'gamestore'
            }
        ],
        listeners: [
            {
                fn: 'onNewGameBtnTap',
                event: 'tap',
                delegate: '#newGameBtn'
            }
        ]
    },

    onNewGameBtnTap: function(button, e, eOpts) {
        this.fireEvent("newGameCommand", this);
    }

});
