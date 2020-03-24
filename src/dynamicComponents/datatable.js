import { makeNodes } from '../__lib/';

import {
    overflowMenuVertical,
    search
} from '../icons';
import button from './button';

export const datatable = (function() {
    function datatable(header, data, options) {
        this.header = header;
        this.data = data;

        this.isSelect = options.hasOwnProperty('selectable')
            ? options.selectable
            : false;
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
        const tbody = body.map(item => `
            <tr class="data_table__tr">
                <td class="data_table__td data_table__select"></td>
                ${getCells(item)}
                <td class="data_table__overflow"></td>
            </tr>`).join('');

        return tbody;
    }

    function getCells(items) {
        return items.map(item => `
            <td class="data_table__td">${item}</td>
        `).join('');
    }

    function select(fn) {
        const select = makeNodes(`
                <label class="select_container">
                    <input class="checkbox" type="checkbox">
                    <span class="checkmark"></span>
                </label>`);
        select
            .querySelector('.checkbox')
            .addEventListener('click', fn);

        return select;
    }

    function overflowMenu(overflow) {
        function menuItemBtn(item) {
            const menuItem = makeNodes(`
                <li class="overflow_menu__item">
                    <button class="overflow_menu_item__btn">
                        ${item.name}
                    </button>
                </li>
            `);

            menuItem
                .querySelector('.overflow_menu_item__btn')
                .addEventListener('click', item.fn);
            
            return menuItem;
        }

        const menu = makeNodes(`
            <div class="overflow_menu__wrapper">
                <button class="overflow_button">
                    ${overflowMenuVertical('btn__overflow_menu_v')}
                </button>
                <div class="overflow_menu__popup">
                    <ul class="overflow_menu__list">
                    </ul>
                </div>
            </div>
        `);

        const list = menu.querySelector('.overflow_menu__list');
        overflow.forEach(item => {
            list.appendChild(menuItemBtn(item));
        });

        return menu;
    }

    datatable.prototype.render = function() {
        document.querySelector('body').addEventListener('click', function(ev) {
            let popup = document.querySelectorAll('.overflow_menu__popup');
            popup.forEach(item => {
                let btn = item.parentNode.children[0];
                let svg = item.parentNode.children[0].children[0];
                let same = ev.target === btn || ev.target === svg;
                if (!same) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            });
        });

        const table = makeNodes(`
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

        const overflows = table.querySelectorAll('.data_table__overflow');
        overflows.forEach(item => {
            item.appendChild(overflowMenu(this.overflow));
        });

        if (this.isSelect) {
            const selects = table.querySelectorAll('.data_table__select');
            selects.forEach(item => {
                item.appendChild(select(this.isSelect));
            });
        }
        
        return table;
    }

    return datatable;
})();

export const tableActions = (function() {
    function tableActions(funcs) {
        this.funcs = funcs;
    }

    function makeSearchInput() {
        const input = makeNodes(`
            <div class="datatable_search_block">
                <span class="datatable_search_icon">
                    ${search('w1-icon fill-gray')}
                </span>
                <input placeholder="Поиск" class="datatable_search" type="text" />
            </div>
        `);

        return input;
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
                this.funcs[key].style,
                this.funcs[key].selector,
                this.funcs[key].disabled
            ).render();
            tableAction.appendChild(btn);
        });

        tableAction.prepend(makeSearchInput());

        return tableAction;
    }

    return tableActions;
})();