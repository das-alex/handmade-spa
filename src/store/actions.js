import { http } from '../httpReq/';
import {
    signin,
    categories,
    deleteCategories,
    departments
} from '../httpReq/queryConstants';
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
    /*----------------------*/
    /*      КАТЕГОРИИ       */
    /*----------------------*/
    getCategories(context) {
        context.commit('loading', true);
        http.get(categories, true).then(data => {
            if (data.status === 200) {
                context.commit('getCategories', JSON.parse(data.response));
            }
            context.commit('loading', false);
        });
    },
    addCategory(context, payload) {
        context.commit('loading', true);
        http.post(categories, payload, true).then(data => {
            if (data.status === 200) {
                context.commit('addCategory', JSON.parse(data.response));
            }
            context.commit('loading', false);
        });
    },
    removeCategories(context, payload) {
        context.commit('loading', true);
        http.delete(deleteCategories, payload, true).then(data => {
            if (data.status === 205) {
                context.commit('removeCategories', payload);
            }
            // 200, 400
            context.commit('loading', false);
        });
    },
    /*----------------------*/
    /*    ПОДРАЗДЕЛЕНИЯ     */
    /*----------------------*/
    getDepartments(context) {
        context.commit('loading', true);
        http.get(departments, true).then(data => {
            if (data.status === 200) {
                context.commit('getDepartments', JSON.parse(data.response));
            }
            context.commit('loading', false);
        });
    },
    datatableSearch(context, payload) {
        context.commit('datatableSearch', payload);
    },
    datatableSelectedAdd(context, payload) {
        context.commit('datatableSelectedAdd', payload);
    },
    datatableSelectedRemove(context, payload) {
        context.commit('datatableSelectedRemove', payload);
    }
};