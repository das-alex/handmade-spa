import Store from '../store';
import routes from './routes';
import { parseUrl, isAvaiable } from './routerUtils';

const router = async (ev) => {
    const app = null || document.querySelector('#app');

    const req = parseUrl();
    const route = (req.resource ? '/' + req.resource : '/') +
                (req.id ? '/:id' : '') +
                (req.verb ? '/' + req.verb : '');

    const page = routes[route] ? routes[route] : routes['/404'];

    if (page.hasOwnProperty('parentTemplate')) {
        if (ev.type === 'load') {
            const parentRoute = page.parentRoute;
            const parentPage = routes[parentRoute].toLoad;
            app.innerHTML = await parentPage.render();
            await parentPage.after();
        }

        const to = document.querySelector(`${page.parentTemplate}-content`);
        to.innerHTML = await page.toLoad.render();
    } else {
        app.innerHTML = await page.toLoad.render();
    }
    await page.toLoad.after();
}

export default router;