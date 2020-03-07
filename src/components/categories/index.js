import { datatable, tableActions } from '../../dynamicComponents/datatable';
import { modal } from '../../dynamicComponents/modal';

import { add } from '../../icons';

import { appendTo, clearfix } from '../../__lib/';
import Store from '../../store/';

export default {
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
        const addCategory = `
            <div class="form_row mb-30">
                <label for="category_name">Название категории</label>
                <input class="mt-8" id="category_name" name="category_name" type="text">
            </div>
            <div class="form_row mb-50">
                <label for="category_link">Ссылка категории</label>
                <input class="mt-8" id="category_link" name="category_link" type="text">
            </div>
        `;

        const actions = new tableActions({
            'Добавить категорию': {
                icon: add,
                action: () => {
                    // const modal = {
                    //     header: 'Добавить новую категроию',
                    //     body: '',
                    //     fields: {},
                    //     btns: {}
                    // };
                    const mdl = new modal('Добавить новую категроию', addCategory);
                    mdl.render();
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
            '', 'Название',
            'Ссылка',
            'Количество отделений', ''
        ];

        const tableData = [
            ['Факультеты', 'faculties', '11'],
            ['Отделы и службы', 'departmentsAndServices', '19'],
            ['Кафедры', 'kafedri', '40'],
            ['Общественные организации', 'publicOrganizations', '6']
        ];

        const ofmDelete = {
            name: 'Удалить',
            fn: function(ev) {
                console.log('Deleted from overflow menu', ev);
            }
        };

        const table = new datatable(
            tableHeader,
            tableData,
            {
                selectable: true,
                overflowMenu: [
                    ofmDelete
                ]
            }
        ).render();

        appendTo('dash__content_body', [actions, clearfix(), table]);
    }
};