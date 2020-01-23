import login from '../components/login';
import home from '../components/home';

// isProtected property is setted by default to true
export default {
    '/' : {'toLoad': home},
    '/login': {'toLoad': login, 'isProtected': false}
};