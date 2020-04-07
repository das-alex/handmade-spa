import Store from "../../store";
import { appendTo, clearfix, getParentsTree, updateIt } from "../../__lib";
import { datatable, tableActions, pagination } from "../../dynamicComponents/datatable";
import { addNewDepartmentModal } from "./addNewDepartment.modal";
import { deleteDepartmentModal } from "./deleteDepartment.modal";

export default {
    beforeRender: async () => {
        Store.dispatch('getDepartments');
    },
    render: async () => {
        return `
        <div class="dash__content_header">
            <div class="dash__content_header_top">
                <p class="pure white_p dash__content_header_p">Подразделения</p>
            </div>
            <div class="dash__content_header_bottom">
            </div>
        </div>
        <div class="dash__content_body">
        </div>
        `;
    },
    afterRender: async () => {
        let begin = 0;
        let end = 10;

        const categoryTitles = {};
        Store.state.departments
            .filter(item => item.category.hasOwnProperty('id'))
            .forEach(item => categoryTitles[item.category.id] = item.category.title);

        const datatableNav = new pagination().render();

        Store.events.subscribe('departments', () => {
            const departments = Store.state.departments.map(item => {
                return [item.id, item.title, item.category.title || categoryTitles[item.category], item.link];
            }).slice(begin, end);
            appendTo('dash__content_body', [actions, clearfix(), table(departments), datatableNav]);
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

        Store.events.subscribe('datatableSearch', () => {
            const seachies = Store.state.datatableSearch.map(item => {
                return [item.id, item.title, item.category.title || categoryTitles[item.category], item.link];
            });
            updateIt('table__wrapper', table(seachies));
        });

        const table = (data) => new datatable(
            ['', 'Название', 'Категория', 'Ссылка',
                'Файлы', ''],
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
                                // Store.dispatch('removeCategories', [parseInt(dataId, 10)]);
                            }
                        }
                    ]
                });
                mdl.render();
            }
        };

        const actions = new tableActions({
            'Добавить подразделение': addNewDepartmentModal,
            'Удалить': deleteDepartmentModal,
            search: (ev) => {
                Store.dispatch('datatableSearch', {
                    searchIn: 'departments',
                    searchBy: ev.target.value
                });
            }
        }).render();
    }
};