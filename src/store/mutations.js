export default {
    loading(state, payload) {
        state.loading = payload;

        return state;
    },
    authorize(state, payload) {
        state.isAuth = payload;

        return state;
    },
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    }
};