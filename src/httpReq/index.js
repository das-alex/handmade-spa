import server from '../constants';

export const http = (function() {
    function http() {
        this.xhr = new XMLHttpRequest();
    }

    http.prototype.post = function(endPoint, payload) {
        this.xhr.open('POST', server + endPoint, true);

        this.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        this.xhr.withCredentials = true;

        this.xhr.send(JSON.stringify(payload));
        return this.xhr;
    }

    http.prototype.get = function() {

    }

    return http;
})();