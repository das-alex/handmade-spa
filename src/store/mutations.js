export default {
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    },
};