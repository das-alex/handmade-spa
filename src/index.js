// import "core-js/stable/promise";
// import "regenerator-runtime/runtime";
import Store from './store/';
import router from './router/';

window.$store = Store;

window.addEventListener('hashchange', router);
window.addEventListener('load', router);