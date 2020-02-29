import login from '../components/login';

import home from '../components/home';
import categories from '../components/categories';
import departments from '../components/departments';

import error404 from '../components/errors/error404';

// isProtected property is settled to true by default
/*
Router works according to the default template
For one or more components can be settled one parent's
template with common styles. That is like subroutes but a bit different.
*/
export default {
    '/' : {toLoad: home,},
    '/categories': {
        toLoad: categories,
        parentTemplate: 'home' // Name of parent component
    },
    '/departments': {
        toLoad: departments,
        parentTemplate: 'home'
    },
    '/login': {toLoad: login, isProtected: false},
    '/404': {toLoad: error404}
};