import { datatable, tableActions } from '../../dynamicComponents/datatable';
import { modal } from '../../dynamicComponents/modal';

import {
    appendTo,
    clearfix,
    getParentsTree,
    updateIt
} from '../../__lib/';
import Store from '../../store/';
import { addNewCategoryModal } from './addNewCategory.modal';
import { deleteCategoryModal } from './deleteCategory.modal';

export default {
    beforeRender: async () => {
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
    afterRender: async () => {
        Store.events.subscribe('categories', () => {
            const categories = Store.state.categories.map(item => {
                return [item.id, item.title, item.link, item.countDepartnemt];
            });
            appendTo('dash__content_body', [actions, clearfix(), table(categories)]);
        });

        Store.events.subscribe('datatableSearch', () => {
            const seachies = Store.state.datatableSearch.map(item => {
                return [item.id, item.title, item.link, item.countDepartnemt];
            });
            updateIt('table__wrapper', table(seachies));
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

        const overflowMenu = {
            'Изменить': function(ev) {
                console.log('changed!');
            },
            'Выключить': function(ev) {
                console.log('Disabled!');
            },
            'Удалить': function(ev) {
                const parentRow = getParentsTree(ev.target, 7)[6];
                const text = parentRow.children[1].innerText;
                const dataId = parentRow.getAttribute('dataId');
                const mdl = new modal({
                    header: 'Удалить запись',
                    body: `Удалить запись "${text}"?`,
                    buttons: [
                        {preset: 'cancel'},
                        {
                            name: 'Удалить',
                            type: 'blueBtn',
                            fn: () => {
                                Store.dispatch('removeCategories', [parseInt(dataId, 10)]);
                            }
                        }
                    ]
                });
                mdl.render();
            }
        };

        const table = (data) => new datatable(
            ['', 'Название', 'Ссылка',
                'Количество подразделений', ''],
            data,
            {
                selectable: (ev) => {
                    const dataId = getParentsTree(ev.target, 4)[3].getAttribute('dataId');

                    if (ev.target.checked) {
                        Store.dispatch('datatableSelectedAdd', parseInt(dataId, 10));
                    } else {
                        Store.dispatch('datatableSelectedRemove', parseInt(dataId, 10));
                    }
                },
                overflowMenu
            }
        ).render();

        const actions = new tableActions({
            'Добавить категорию': addNewCategoryModal,
            'Удалить': deleteCategoryModal,
            search: (ev) => {
                Store.dispatch('datatableSearch', {
                    searchIn: 'categories',
                    searchBy: ev.target.value
                });
            }
        }).render();
    }
};