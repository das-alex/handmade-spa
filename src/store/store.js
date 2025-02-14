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
    
    this.status = '...';
    this.events = new Pubsub();

    const self = this;
    this.state = new Proxy((params.state || {}), {
        set: function(state, key, value) {
            state[key] = value;

            self.debug && console.log('stateChange', key, ': ', value);
            self.events.publish(`${key}`, self.state);

            if (self.status !== 'mutation' && self.debug) {
                console.warn('Use mutation to set key');
            }

            self.status = '...';

            return true;
        }
    });
}

store.prototype.dispatch = function(actionKey, payload) {
    if (typeof this.actions[actionKey] !== 'function' ) {
        this.debug && console.error(`Action ${actionKey} doesnt exist`);
        return false;
    }

    this.debug && console.groupCollapsed(`ACTION: ${actionKey}`);

    this.status = 'action';
    this.actions[actionKey](this, payload);

    this.debug && console.groupEnd();

    return true;
}

store.prototype.commit = function(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== 'function') {
        this.debug && console.log(`Mutation ${mutationKey} doesnt exist`);
        return false;
    }

    this.status = 'mutation';

    let newState = this.mutations[mutationKey](this.state, payload);

    this.state = Object.assign(this.state, newState);

    return true;
}

export default store;