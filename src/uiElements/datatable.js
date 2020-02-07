import { overflowMenuVertical, add } from '../icons';
import button from './button';

export const datatable = (header, data, funcs) => {
    const btn = new button('Тест', add, (1+1+1));

    const headerMarkup = header.map(item => 
        `<th class="data_table__th">${item}</th>`
    ).join('');

    const overflowMenu = () => {
        
    };

    const dataMarkup = data.map(item => `
        <tr class="data_table__tr">
            <td class="data_table__td">${item[0]}</td>
            <td class="data_table__td">${item[1]}</td>
            <td class="data_table__td">${item[2]}</td>
            <td>${overflowMenuVertical('btn__overflow_menu_v')}</td>
        </tr>
    `).join('');

    return `
    <div class="table_action">
        ${btn.render()}
    </div>
    <div class="table__wrapper shadow">
        <table class="data_table">
            <thead class="data_table__header">
                <tr>
                    ${headerMarkup}
                </tr>
            </thead>
            <tbody>
                ${dataMarkup}
            </tbody>
        </table>
    </div>
    `;
};