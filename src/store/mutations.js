export default {
    authorize(state, payload) {
        state.response = payload;

        return state;
    },
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    },
    loginUser(state, payload) {
        state.isAuth = payload;

        return state;
    }
};