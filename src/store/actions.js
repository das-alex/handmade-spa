import { http } from '../httpReq/';

export default {
    authorize(context, payload) {
        const req = new http();
        const data = req.post('/api/login', payload);

        context.commit('authorize', data);
    },
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    },
    loginUser(context, payload) {
        context.commit('loginUser', payload);
    }
};