export default {
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    },
    loginUser(state, payload) {
        state.isAuth = payload;

        return state;
    }
};