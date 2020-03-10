import { http } from '../httpReq/';

export default {
    authorize(context, payload) {
        // save token and get token to further actions
        const req = new http();
        const data = req.post('/auth/signin', payload);
        data.addEventListener('load', (res) => {
            context.commit('authorize', res);
        });
    },
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    }
};