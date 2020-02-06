import { datatable } from '../../uiElements/datatable';

export default {
    renderTo: 'dash__content',
    render: async () => {
        const tableHeader = [
            'Название',
            'Ссылка',
            'Количество отделений', ''
        ];

        const tableData = [
            ['Факультеты', 'faculties', '11'],
            ['Отделы и службы', 'departmentsAndServices', '19'],
            ['Кафедры', 'kafedri', '40'],
            ['Общественные организации', 'publicOrganizations', '6']
        ];

        return `
        <div class="dash__content_header">
            <div class="dash__content_header_top">
                <p class="pure white_p dash__content_header_p">Категории</p>
            </div>
            <div class="dash__content_header_bottom">
            </div>
        </div>
        <div class="dash__content_body">
            ${datatable(tableHeader, tableData)}
        </div>
        `;
    },
    after: async () => {}
};