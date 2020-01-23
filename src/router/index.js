import routes from './routes';
import routerUtils from './routerUtils';

const router = async () => {
    const app = null || document.querySelector('#app');

    // Some error occurred here
    const req = routerUtils.parseUrl();

    app.innerHTML = await routes['/'].toLoad.render();
    await routes['/'].toLoad.after();
}

export default router;