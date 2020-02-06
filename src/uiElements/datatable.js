import { overflowMenuVertical } from '../icons';

export const datatable = (header, data, funcs) => {
    const headerMarkup = header.map(item => 
        `<th class="data_table__th">${item}</th>`
    ).join('');

    const dataMarkup = data.map(item => `
        <tr>
            <td class="data_table__td">${item[0]}</td>
            <td class="data_table__td">${item[1]}</td>
            <td class="data_table__td">${item[2]}</td>
            <td>${overflowMenuVertical('btn__overflow_menu_v')}</td>
        </tr>
    `).join('');

    return `
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