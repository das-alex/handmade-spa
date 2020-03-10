export default {
    loading(state, payload) {
        state.loading = payload;

        return state;
    },
    authorize(state, payload) {
        state.isAuth = payload.isAuth;
        state.user = payload.jwt;

        return state;
    },
    logout(state) {
        state.isAuth = false;
        state.user = {};

        return state;
    },
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    }
};