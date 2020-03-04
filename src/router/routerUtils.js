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

export const isAvaiable = (page) => {
    if (page.hasOwnProperty('isProtected') && page.isProtected === false) {
        return true;
    }
    return false;
};

// export const isAuthorized = (result) => {
//     const token = localStorage.getItem('token');
//     if (token) {

//     }
// };

export const routeTo = (route) => {
    window.location.hash = route;
};