const routerUtils = {
    parseUrl: () => {
        console.log('router utils one', location.hash.slice(1));
        // const url = location.hash.slice(1) || '/';
        // const parts = url.split('/');

        // return {
        //     resource: parts[1] || null,
        //     id: parts[2] || null,
        //     verb: parts[3] || null
        // }
    }
};

export default routerUtils;