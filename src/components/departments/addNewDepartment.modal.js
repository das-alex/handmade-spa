import { add } from "../../icons";
import { modal } from "../../dynamicComponents/modal";
import { transliterate } from "../../__lib";

export const addNewDepartmentModal = {
    icon: add,
    style: 'float_r',
    action: () => {
        const mdl = new modal({
            header: 'Добавить новое подразделение',
            fields: [
                {
                    name: 'Название подразделения',
                    id: 'department_name',
                    fn: [
                        {
                            eventType: 'input',
                            fn: (ev) => {
                                document.getElementById('department_link').value = transliterate(ev.target.value);
                            }
                        }
                    ]
                },
                {
                    name: 'Ссылка подразделения',
                    id: 'department_link'
                },
                {
                    name: 'Принадлежность к категории',
                    id: 'category'
                }
            ],
            buttons: [
                { preset: 'cancel' },
                {
                    name: 'Сохранить',
                    type: 'blueBtn',
                    fn: () => {
                        const name = document.getElementById('department_name').value;
                        const link = document.getElementById('department_link').value;

                        if (name !== '' && link !== '') {
                            Store.dispatch('addDepartment', {
                                title: name,
                                link: link,
                                category: {
                                    id: 1
                                }
                            });
                        }
                    }
                }
            ]
        });
        mdl.render();
    }
};