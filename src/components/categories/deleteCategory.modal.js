import Store from "../../store";
import { modal } from "../../dynamicComponents/modal";

export const deleteCategoryModal = {
    icon: '',
    style: 'float_r',
    selector: 'datatableDeleteBtn',
    disabled: true,
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
    }
}