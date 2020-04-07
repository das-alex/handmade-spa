import { makeNodes } from '../__lib/';

import {
    overflowMenuVertical,
    search,
    playFilled
} from '../icons';
import button from './button';

export const datatable = (function() {
    function datatable(header, data, options) {
        this.header = header;

        // First element in 'this.data' is always 'id'
        this.data = data;

        if (options) {
            this.isSelect = options.hasOwnProperty('selectable')
                ? options.selectable
                : false;
            this.overflow = options.hasOwnProperty('overflowMenu')
                ? options.overflowMenu
                : false;
        }
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
            <tr class="data_table__tr" dataId="${item[0]}">
                <td class="data_table__td data_table__select"></td>
                ${getCells(item.slice(1))}
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
                .addEventListener('click', item);
            
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

        const keys = Object.keys(overflow);
        keys.forEach(key => {
            list.appendChild(menuItemBtn(overflow[key]));
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

        if (this.overflow) {
            const overflows = table.querySelectorAll('.data_table__overflow');
            overflows.forEach(item => {
                item.appendChild(overflowMenu(this.overflow));
            });
        }

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

    function makeSearchInput(fn) {
        const input = makeNodes(`
            <div class="datatable_search_block">
                <span class="datatable_search_icon">
                    ${search('w1-icon fill-gray')}
                </span>
                <input placeholder="Поиск" class="datatable_search" type="text" />
            </div>
        `);

        input
            .querySelector('.datatable_search')
            .addEventListener('input', fn);

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
            if (key === 'search') {
                tableAction.prepend(makeSearchInput(this.funcs[key]));
            } else {
                const btn = new button(
                    key,
                    this.funcs[key].icon,
                    this.funcs[key].action,
                    this.funcs[key].style,
                    this.funcs[key].selector,
                    this.funcs[key].disabled
                ).render();
                tableAction.appendChild(btn);
            }
        });

        return tableAction;
    }

    return tableActions;
})();

export const pagination = (function() {
    function pagination(prev = '', next = '') {
        this.prev = prev;
        this.next = next;
    }

    function markup() {
        const pagination = makeNodes(`
            <div class="datatable__pagination">
                <div class="pagination__nav">
                    <span class="datatable_pagination_nav__left">${playFilled('mirror_x w1-icon')}</span>
                    <span class="datatable_pagination_nav__right">${playFilled('w1-icon')}</span>
                </div>
            </div>
        `);

        return pagination;
    }

    pagination.prototype.render = function() {
        return markup();
    }

    return pagination;
})();