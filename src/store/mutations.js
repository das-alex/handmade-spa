export default {
    loading(state, payload) {
        state.loading = payload;

        return state;
    },
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