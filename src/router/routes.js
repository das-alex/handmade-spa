import login from '../components/login';
import home from '../components/home';
import categories from '../components/categories';
import error404 from '../components/errors/error404';

// isProtected property is setted by default to true
export default {
    '/' : {'toLoad': home},
    '/login': {'toLoad': login, 'isProtected': false},
    '/categories': {'toLoad': categories},
    '/404': {'toLoad': error404}
};