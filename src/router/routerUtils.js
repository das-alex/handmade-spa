import Store from '../store/';

export const parseUrl = () => {
    const url = location.hash.slice(1) || '/';
    const parts = url.split('/');

    return {
        resource: parts[1] || null,
        id: parts[2] || null,
        verb: parts[3] || null
    }
};

export const isProtected = (page) => {
    if (page.hasOwnProperty('isProtected') && page.isProtected === false) {
        return false;
    }
    return true;
};

export const isAuthorized = () => {
    const token = localStorage.getItem('token');
    const isAuth = Store.state.isAuth;
    if (token && isAuth) {
        return true;
    }
    return false;
};

export const routeTo = (route) => {
    window.location.hash = route;
};