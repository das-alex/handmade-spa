import store from './store';

import actions from './actions';
import mutations from './mutations';
import state from './state';

const Store = new store({
    debug: false,
    actions,
    mutations,
    state
});

export default Store;