/*
 * File: app/view/GameEditorPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ChessUnbound.view.GameEditorPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.gameditor',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'ChessUnbound'
            },
            {
                xtype: 'fieldset',
                title: 'New Game',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        itemId: 'nameField',
                        name: 'name'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'abortBtn',
                        ui: 'decline',
                        text: 'Abort'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'createGameBtn',
                        ui: 'confirm',
                        text: 'Create'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onAbortBtnTap',
                event: 'tap',
                delegate: '#abortBtn'
            },
            {
                fn: 'onCreateBtnTap',
                event: 'tap',
                delegate: '#createGameBtn'
            }
        ]
    },

    onAbortBtnTap: function(button, e, eOpts) {
        this.fireEvent("backToHomeCommand", this);
    },

    onCreateBtnTap: function(button, e, eOpts) {
        this.fireEvent("createGameCommand", this);
    }

});
