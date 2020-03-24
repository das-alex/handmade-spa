import { datatable, tableActions } from '../../dynamicComponents/datatable';
import { modal } from '../../dynamicComponents/modal';

import { add } from '../../icons';

import { appendTo, clearfix, transliterate } from '../../__lib/';
import Store from '../../store/';

export default {
    fetchData: async () => {
        Store.dispatch('getCategories');
    },
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
        Store.events.subscribe('categories', () => {
            makeTable();
        });

        Store.events.subscribe('datatableSelects', () => {
            const arr = Store.state.datatableSelects;
            const deleteBtn = document.querySelector('.datatableDeleteBtn');
            if (arr.length > 0) {
                deleteBtn.disabled = false;
                deleteBtn.innerText = `Удалить ${arr.length}`;
            } else {
                deleteBtn.disabled = true;
                deleteBtn.innerText = 'Удалить';
            }
        });

        function makeTable() {
            const tableHeader = [
                '', 'Название', 'Ссылка',
                'Количество отделений', ''
            ];

            const actions = new tableActions({
                'Добавить категорию': {
                    icon: add,
                    action: () => {
                        const mdl = new modal({
                            header: 'Добавить новую категроию',
                            fields: [
                                {
                                    name: 'Название категории',
                                    id: 'category_name',
                                    fn: [
                                        {
                                            eventType: 'input',
                                            fn: (ev) => {
                                                document.getElementById('category_link').value = transliterate(ev.target.value);
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'Ссылка категории',
                                    id: 'category_link'
                                }
                            ],
                            buttons: [
                                { preset: 'cancel' },
                                {
                                    name: 'Сохранить',
                                    type: 'blueBtn',
                                    fn: () => {
                                        const name = document.getElementById('category_name').value;
                                        const link = document.getElementById('category_link').value;

                                        if (name !== '' && link !== '') {
                                            Store.dispatch('addCategory', {
                                                title: name,
                                                link: link,
                                                canHaveYMKD: true
                                            });
                                        }
                                    }
                                }
                            ]
                        });
                        mdl.render();
                    },
                    style: 'float_r'
                },
                'Удалить': {
                    icon: '',
                    action: () => {
                        
                    },
                    style: 'float_r',
                    selector: 'datatableDeleteBtn',
                    disabled: true
                }
            }).render();

            const ofmDelete = {
                name: 'Удалить',
                fn: function(ev) {
                    const mdl = new modal('Удалить категорию?', 'Данное действие навсегда удалит эту категорию');
                    mdl.render();
                    console.log('Deleted from overflow menu', ev);
                }
            };

            const ofmChange = {
                name: 'Изменить',
                fn: function(ev) {
                    console.log('changed!');
                }
            };

            const categories = Store.state.categories.map(item => {
                const departmentLength = item.departments ? item.departments.length : 0;
                return [item.title, item.link, departmentLength];
            });

            const table = new datatable(
                tableHeader,
                categories,
                {
                    selectable: (ev) => {
                        if (ev.target.checked) {
                            Store.dispatch('datatableSelectedAdd', 1);
                        } else {
                            Store.dispatch('datatableSelectedRemove', 1);
                        }
                    },
                    overflowMenu: [
                        ofmDelete,
                        ofmChange
                    ]
                }
            ).render();

            appendTo('dash__content_body', [actions, clearfix(), table]);
        }

    }
};