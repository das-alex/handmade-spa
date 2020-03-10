import { makeNodes } from '../__lib/';

import { overflowMenuVertical } from '../icons';
import button from './button';

export const datatable = (function() {
    function datatable(header, data, options) {
        this.header = header;
        this.data = data;

        this.isSelect = options.selectable;
        this.overflow = options.overflowMenu
    }

    function getHeader(header) {
        return header.map(item =>
            `<th class="data_table__th">
                ${item}
            </th>`
        ).join('');
    }

    function getBody(body) {
        return body.map(row => `
            <tr class="data_table__tr">
                <td class="data_table__td">
                    <input type="checkbox">
                </td>
                ${getCells(row)}
                <td>${overflowMenuVertical('btn__overflow_menu_v')}</td>    
            </tr>
        `).join('')
    }

    function getCells(items) {
        return items.map(item => `
            <td class="data_table__td">${item}</td>
        `).join('');
    }

    function select() {
        const select = makeNodes(`
            <td class="data_table__td">
                <input type="checkbox">
            </td>
        `);
    }

    function overflowMenu(overflow) {
        return makeNodes(`
            <div class="overflow_menu__wrapper">
                <button class="overflow_button">
                    ${overflowMenuVertical('btn__overflow_menu_v')}
                </button>
                <div class="overflow_menu__popup">
                    <ul class="overflow_menu__list">
                        <li class="overflow_menu__item">
                            <button></button>
                        </li>
                    </ul>
                </div>
            </div>
        `);
    }

    datatable.prototype.render = function() {
        return makeNodes(`
            <div class="table__wrapper shadow">
                <table class="data_table">
                    <thead class="data_table__header">
                        <tr>
                            ${getHeader(this.header)}
                        </tr>
                    </thead>
                    <tbody>
                        ${getBody(this.data)}
                    </tbody>
                </table>
            </div>
        `);
    }

    return datatable;
})();

export const tableActions = (function() {
    function tableActions(funcs) {
        this.funcs = funcs;
    }

    tableActions.prototype.render = function() {
        const tableAction = document.createElement('div');
        tableAction.classList.add('table_action');

        const keys = Object.keys(this.funcs);

        if (keys.length == 0) {
            return false;
        }
        keys.forEach(key => {
            const btn = new button(
                key,
                this.funcs[key].icon,
                this.funcs[key].action,
                this.funcs[key].style
            ).render();
            tableAction.appendChild(btn);
        });

        return tableAction;
    }

    return tableActions;
})();