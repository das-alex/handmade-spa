import { http } from '../httpReq/';
import { signin, getCategories } from '../httpReq/queryConstants';
import { parseJwt } from '../__lib/';

import { routeTo } from '../router/routerUtils';

export default {
    loading(context, payload) {
        context.commit('loading', payload);
    },
    authorize(context, payload) {
        context.commit('loading', true);
        http.post(signin, payload).then(data => {
            if (data.status === 200) {
                localStorage.setItem('token', JSON.parse(data.response).token);
                context.commit('authorize', {
                    isAuth: true,
                    jwt: parseJwt(JSON.parse(data.response).token)
                });
                context.commit('loading', false);
                routeTo('/');
            }
        });
    },
    logout(context) {
        localStorage.clear();
        context.commit('logout');
    },
    getCategories(context) {
        context.commit('loading', true);
        http.get(getCategories, true).then(data => {
            if (data.status === 200) {
                context.commit('getCategories', JSON.parse(data.response));
            }
            context.commit('loading', false);
        });
    },
    addCategory(context, payload) {
        context.commit('addCategory', payload);
    }
};