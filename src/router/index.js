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

    // console.log(isAvaiable(page));

    if (page.hasOwnProperty('parentTemplate')) {
        let to = document.querySelector(`${page.parentTemplate}-content`);

        if (to === null) {
            const parentRoute = page.parentRoute;
            const parentPage = routes[parentRoute].toLoad;
            
            app.innerHTML = await parentPage.render();
            await parentPage.after();

            to = document.querySelector(`${page.parentTemplate}-content`);
        }

        to.innerHTML = await page.toLoad.render();
    } else {
        app.innerHTML = await page.toLoad.render();
    }
    await page.toLoad.after();
}

export default router;