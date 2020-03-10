import { http } from '../httpReq/';
import { signin } from '../httpReq/queryConstants';
import { parseJwt } from '../__lib/';
import { routeTo } from '../router/routerUtils';

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
                context.commit('authorize', {
                    isAuth: true,
                    jwt: parseJwt(JSON.parse(response).token)
                });
                routeTo('/');
            }
            context.commit('loading', false);
        });
    },
    logout(context) {
        localStorage.clear();
        context.commit('logout');
    },
    getCategories(context, payload) {
        context.commit('getCategories', payload);
    },
    addCategory(context, payload) {
        // Some actions with http here
        context.commit('addCategory', payload);
    }
};