import { datatable, tableActions } from '../../uiElements/datatable';
import { clearfix } from '../../uiElements/clearfix';
import { add } from '../../icons';

export default {
    renderTo: 'dash__content',
    render: async () => {
        return `
        <div class="dash__content_header">
            <div class="dash__content_header_top">
                <p class="pure white_p dash__content_header_p">Категории</p>
            </div>
            <div class="dash__content_header_bottom">
            </div>
        </div>
        <div class="dash__content_body">
        </div>
        `;
    },
    after: async () => {
        const actions = new tableActions({
            'Добавить категорию': {
                icon: add,
                action: () => {
                    console.log('Hello from categories');
                },
                style: 'float_r'
            },
            'Удалить всё': {
                icon: '',
                action: () => {
                    console.log('Deleted something');
                },
                style: 'float_r'
            }
        }).render();

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

        const table = new datatable(tableHeader, tableData).render();

        document.querySelector('.dash__content_body').appendChild(actions);
        clearfix('.dash__content_body');
        document.querySelector('.dash__content_body').appendChild(table);
    }
};