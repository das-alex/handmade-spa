import routes from './routes';
import routerUtils from './routerUtils';

const router = async () => {
    const app = null || document.querySelector('#app');

    const req = routerUtils.parseUrl();
    const route = (req.resource ? '/' + req.resource : '/') +
                (req.id ? '/:id' : '') +
                (req.verb ? '/' + req.verb : '');

    let page = routes[route] ? routes[route].toLoad : routes['/404'].toLoad;

    app.innerHTML = await page.render();
    await page.after();
}

export default router;