import Store from '../store';
import routes from './routes';
import {
    parseUrl,
    isProtected,
    isAuthorized,
    routeTo
} from './routerUtils';

const router = async (ev) => {
    const app = null || document.querySelector('#app');

    const req = parseUrl();
    const route = (req.resource ? '/' + req.resource : '/') +
                (req.id ? '/:id' : '') +
                (req.verb ? '/' + req.verb : '');

    let page = routes[route] ? routes[route] : routes['/404'];

    if (isProtected(page) && isAuthorized(Store.state.isAuth) === false) {
        routeTo('/login');
    }

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