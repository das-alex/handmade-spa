import { overflowMenuVertical } from '../icons';
import button from './button';

export const datatable = (function() {
    function datatable(header, data) {
        this.header = header;
        this.data = data;
    }

    datatable.prototype.render = function() {
        const headerMarkup = this.header.map(item => 
            `<th class="data_table__th">${item}</th>`
        ).join('');
    
        const dataMarkup = this.data.map(item => `
            <tr class="data_table__tr">
                <td class="data_table__td">${item[0]}</td>
                <td class="data_table__td">${item[1]}</td>
                <td class="data_table__td">${item[2]}</td>
                <td>${overflowMenuVertical('btn__overflow_menu_v')}</td>
            </tr>
        `).join('');
    
        const table = `
            <table class="data_table">
                <thead class="data_table__header">
                    <tr>
                        ${headerMarkup}
                    </tr>
                </thead>
                <tbody>
                    ${dataMarkup}
                </tbody>
            </table>`;

        const tableWrapper = document.createElement('div');
        tableWrapper.classList.add('table__wrapper');
        tableWrapper.classList.add('shadow');
        
        tableWrapper.innerHTML = table;
        return tableWrapper;
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