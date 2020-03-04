export default {
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    },
    loginUser(context, payload) {
        context.commit('loginUser', payload);
    }
};