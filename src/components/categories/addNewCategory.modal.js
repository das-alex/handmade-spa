import { add } from "../../icons";
import { modal } from "../../dynamicComponents/modal";
import Store from "../../store";
import { transliterate } from "../../__lib";

export const addNewCategoryModal = {
    icon: add,
    style: 'float_r',
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
    }
}