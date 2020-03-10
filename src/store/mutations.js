export default {
    authorize(state, payload) {
        console.log('MUTATION', payload)
        // state.response = payload;
        // state.isAuth = true;

        return state;
    },
    addCategory(state, payload) {
        state.items.push(payload);

        return state;
    }
};