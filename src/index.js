// import "core-js/stable/promise";
// import "regenerator-runtime/runtime";
import router from './router/index.js';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);