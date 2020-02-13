const Pubsub = (function() {
    function Pubsub() {
        this.events = {};
    }

    Pubsub.prototype.subscribe = function(event, callback) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        return this.events[event].push(callback);
    };

    Pubsub.prototype.publish = function(event, data = {}) {
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }
        return this.events[event].map(callback => callback(data));
    };

    return Pubsub;

})();

function store(params) {
    this.debug = params.hasOwnProperty('debug') ? params.debug : false;

    this.actions = params.hasOwnProperty('actions') ? params.actions : {};
    this.mutations = params.hasOwnProperty('mutations') ? params.mutations : {};
    
    this.state = new Proxy((params.state || {}), {
        set: function(state, key, value) {
            state[key] = value;

            console.log('stateChange', key, ': ', value);
            this.events.publish('stateChange', this.state);

            if (this.status !== 'mutation') {
                console.warn('Use mutation to set key');
            }

            this.status = '...';

            return true;
        }
    });
    
    this.status = '...';
    this.events = new Pubsub();
}

store.prototype.dispatch = function(actionKey, payload) {
    if (typeof this.actions[actionKey] !== 'function') {
        console.error(`Action ${actionKey} doesnt exist`);
        return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);

    this.status = 'action';
    this.actions[actionKey](this, payload);

    console.groupEnd();

    return true;
}

store.prototype.commit = function(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== 'function') {
        console.log(`Mutation ${mutationKey} doesnt exist`);
        return false;
    }

    this.status = 'mutation';

    let newState = this.mutations[mutationKey](this.state, payload);

    this.state = Object.assign(this.state, newState);

    return true;
}

export default store;