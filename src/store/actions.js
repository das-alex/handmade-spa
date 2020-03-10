import { http } from '../httpReq/';
import { signin } from '../httpReq/queryConstants';

export default {
    loading(context, payload) {
        context.commit('loading', payload);
    },
    authorize(context, payload) {
        context.commit('loading', true);
        const data = http.post(signin, payload);
        data.addEventListener('load', (event) => {
            const {status, response} = event.target;
            if (status === 200) {
                localStorage.setItem('token', JSON.parse(response).token);
                context.commit('authorize', true);
            }
            context.commit('loading', false);
        });
    },
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    }
};