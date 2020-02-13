import Store from '../store';
import routes from './routes';
import { parseUrl, isAvaiable } from './routerUtils';

const $store = Store;

const router = async () => {
    const app = null || document.querySelector('#app');

    const req = parseUrl();
    const route = (req.resource ? '/' + req.resource : '/') +
                (req.id ? '/:id' : '') +
                (req.verb ? '/' + req.verb : '');

    let page = routes[route] ? routes[route].toLoad : routes['/404'].toLoad;

    if (page.hasOwnProperty('renderTo')) {
        document.querySelector(`.${page.renderTo}`).innerHTML = await page.render();
    } else {
        app.innerHTML = await page.render();
    }
    await page.after();
}

export default router;