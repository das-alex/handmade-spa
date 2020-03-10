import { http } from '../httpReq/';
import { signin } from '../httpReq/queryConstants';

export default {
    loading(context, payload) {
        context.commit('loading', payload);
    },
    authorize(context, payload) {
        // save token and get token to further actions
        context.commit('loading', true);
        const data = http.post(signin, payload);

        data.addEventListener('load', (event) => {
            context.commit('authorize', {
                status: event.target.status,
                response: event.target.response
            });
        });
    },
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    }
};