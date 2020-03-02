export const parseUrl = () => {
    const url = location.hash.slice(1) || '/';
    const parts = url.split('/');

    return {
        resource: parts[1] || null,
        id: parts[2] || null,
        verb: parts[3] || null
    }
};

export const isAvaiable = (route) => {
    
};

export const routeTo = (route) => {
    window.location.hash = route;
};