import { datatable, tableActions } from '../../dynamicComponents/datatable';
import { modal } from '../../dynamicComponents/modal';

import { add } from '../../icons';

import {
    appendTo,
    clearfix,
    transliterate,
    getParentsTree,
    updateIt
} from '../../__lib/';
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
            const categories = Store.state.categories.map(item => {
                return [item.id, item.title, item.link, item.countDepartnemt];
            });
            makeTable(categories);
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

        const ofmDelete = {
            name: 'Удалить',
            fn: function(ev) {
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

        const ofmChange = {
            name: 'Изменить',
            fn: function(ev) {
                console.log('changed!');
            }
        };

        const table = (data) => new datatable(
            ['', 'Название', 'Ссылка',
                'Количество отделений', ''],
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
                overflowMenu: [
                    ofmChange,
                    ofmDelete
                ]
            }
        ).render();

        function makeTable(data) {
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
                        const arr = Store.state.datatableSelects;
                        const mdl = new modal({
                            header: 'Удалить набор записей',
                            body: `Удалить набор из ${arr.length} записей?`,
                            buttons: [
                                {preset: 'cancel'},
                                {
                                    name: 'Удалить',
                                    type: 'blueBtn',
                                    fn: () => {
                                        Store.dispatch('removeCategories', arr);
                                    }
                                }
                            ]
                        });
                        mdl.render();
                    },
                    style: 'float_r',
                    selector: 'datatableDeleteBtn',
                    disabled: true
                },
                search: (ev) => {
                    Store.dispatch('datatableSearch', {
                        searchIn: 'categories',
                        searchBy: ev.target.value
                    });
                }
            }).render();

            // const ofmDelete = {
            //     name: 'Удалить',
            //     fn: function(ev) {
            //         const parentRow = getParentsTree(ev.target, 7)[6];
            //         const text = parentRow.children[1].innerText;
            //         const dataId = parentRow.getAttribute('dataId');
            //         const mdl = new modal({
            //             header: 'Удалить запись',
            //             body: `Удалить запись "${text}"?`,
            //             buttons: [
            //                 {preset: 'cancel'},
            //                 {
            //                     name: 'Удалить',
            //                     type: 'blueBtn',
            //                     fn: () => {
            //                         Store.dispatch('removeCategories', [parseInt(dataId, 10)]);
            //                     }
            //                 }
            //             ]
            //         });
            //         mdl.render();
            //     }
            // };

            // const ofmChange = {
            //     name: 'Изменить',
            //     fn: function(ev) {
            //         console.log('changed!');
            //     }
            // };

            // const table = new datatable(
            //     ['', 'Название', 'Ссылка',
            //         'Количество отделений', ''],
            //     data,
            //     {
            //         selectable: (ev) => {
            //             const dataId = getParentsTree(ev.target, 4)[3].getAttribute('dataId');

            //             if (ev.target.checked) {
            //                 Store.dispatch('datatableSelectedAdd', parseInt(dataId, 10));
            //             } else {
            //                 Store.dispatch('datatableSelectedRemove', parseInt(dataId, 10));
            //             }
            //         },
            //         overflowMenu: [
            //             ofmChange,
            //             ofmDelete
            //         ]
            //     }
            // ).render();

            appendTo('dash__content_body', [actions, clearfix(), table(data)]);
        }

    }
};