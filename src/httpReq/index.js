import server from '../constants';

export const http = (function() {
    function http() {
        this.xhr = new XMLHttpRequest();
    }

    http.prototype.post = function(endPoint, payload, bearer = false) {
        this.xhr.open('POST', server + endPoint, true);

        if (bearer) {
            this.xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
        }
        this.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        this.xhr.withCredentials = true;

        this.xhr.send(JSON.stringify(payload));
        return this.xhr;
    }

    http.prototype.get = function(endPoint, bearer = false) {
        this.xhr.open('GET', server + endPoint, true);

        if (bearer) {
            this.xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
        }
        this.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        this.xhr.withCredentials = true;

        this.xhr.send();
        return this.xhr;
    }

    return new http();
})();