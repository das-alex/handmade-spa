import server from '../constants';

export const http = (function() {
    function http() {
        this.xhr = new XMLHttpRequest();
    }

    function setHeaders(bearer) {
        if (bearer) {
            this.xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`);
        }
        this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        this.xhr.withCredentials = true;
    }

    function handleResponse(xhr) {
        return new Promise(function(res) {
            xhr.addEventListener('load', function(event) {
                const {status, response} = event.target;
                res({
                    status,
                    response
                });
            });
        });
    }

    http.prototype.post = function(endPoint, payload, bearer = false) {
        this.xhr.open('POST', server + endPoint, true);

        setHeaders.call(this, bearer);

        this.xhr.send(JSON.stringify(payload));
        return handleResponse(this.xhr);
    }

    http.prototype.get = function(endPoint, bearer = false) {
        this.xhr.open('GET', server + endPoint, true);

        setHeaders.call(this, bearer);

        this.xhr.send();
        return handleResponse(this.xhr);
    }

    return new http();
})();