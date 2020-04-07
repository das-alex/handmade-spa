export default {
    loading(state, payload) {
        state.loading = payload;

        // return state;
    },
    /*----------------------*/
    /*      АВТОРИЗАЦИЯ     */
    /*----------------------*/
    authorize(state, payload) {
        state.isAuth = payload.isAuth;
        state.user = payload.jwt;
    },
    logout(state) {
        state.isAuth = false;
        state.user = {};
    },
    /*----------------------*/
    /*      КАТЕГОРИИ       */
    /*----------------------*/
    getCategories(state, payload) {
        state.categories = payload;
    },
    addCategory(state, payload) {
        state.categories = [...state.categories, payload];
    },
    removeCategories(state, payload) {
        state.categories = state.categories.filter(item => 
            !payload.includes(item.id)
        );
        state.datatableSelects = [];
    },
    /*----------------------*/
    /*    ПОДРАЗДЕЛЕНИЯ     */
    /*----------------------*/
    getDepartments(state, payload) {
        state.departments = payload;
    },
    addDepartment(state, payload) {
        state.departments = [...state.departments, payload];
    },
    /*-----------------------*/
    /*  DATATABLE SEARCH    */
    /*---------------------*/
    datatableSearch(state, payload) {
        state.datatableSearch = state[payload.searchIn].filter(item => {
            return item.title.toLowerCase().indexOf(payload.searchBy.toLowerCase()) !== -1;
        });
    },
    /*-----------------------*/
    /*  DATATABLE SELECTS   */
    /*---------------------*/
    datatableSelectedAdd(state, payload) {
        state.datatableSelects = [...state.datatableSelects, payload];
    },
    datatableSelectedRemove(state, payload) {
        state.datatableSelects = state.datatableSelects.filter(item => item === payload ? false : true);
    },
    clearSelects(state) {
        state.datatableSelects = [];
    }
};