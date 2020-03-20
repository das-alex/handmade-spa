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

        // return state;
    },
    logout(state) {
        state.isAuth = false;
        state.user = {};

        // return state;
    },
    /*----------------------*/
    /*      КАТЕГОРИИ       */
    /*----------------------*/
    getCategories(state, payload) {
        state.categories = payload;

        // return state;
    },
    addCategory(state, payload) {
        state.categories.push(payload);

        // return state;
    }
};