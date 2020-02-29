import Store from '../store';
import routes from './routes';
import { parseUrl, isAvaiable } from './routerUtils';

const router = async (ev) => {
    
    // TODO on load do check type of ev

    const app = null || document.querySelector('#app');

    const req = parseUrl();
    const route = (req.resource ? '/' + req.resource : '/') +
                (req.id ? '/:id' : '') +
                (req.verb ? '/' + req.verb : '');

    const page = routes[route] ? routes[route] : routes['/404'];
    if (page.hasOwnProperty('parentTemplate')) {
        const to = document.querySelector(`${page.parentTemplate}-content`);
        to.innerHTML = await page.toLoad.render();
    } else {
        app.innerHTML = await page.toLoad.render();
    }
    await page.toLoad.after();
}

export default router;