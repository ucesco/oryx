(function () {
    "use strict";

    function Router () {
        this._routes = [];
        this._parser = document.createElement('a');

        window.addEventListener('hashchange', this._onRouteChange);
    }

    Router.prototype.addRoute = function (pattern, callback) {
        if (!this._isValid(pattern)) {
            throw pattern.toString() + ' is invalid.';
        }

        !callback && console.warn('No callback is added for ' + pattern.toString() + 'pattern.');

        this._routes.push({pattern: pattern, callback: callback});
    };

    Router.prototype.deleteRoute = function (pattern) {
        var indexies = this._findRoute(pattern);

        for (var i = routes.length - 1; i >= 0; i--) {
            this._routes.splice(routes[i], 1);
        }
    };

    Router.prototype._match = function (url) {
        var routes = [],
            hash;

        this._parser.href = url;

        hash = this._parser.hash.substring(1, this._parser.hash.length);

        for (var i = routes.length - 1; i >= 0; i--) {
            _matchRoute(hash, routes[i]) && routes.push(routes[i]);
        }

        return routes;
    };

    Router.prototype._matchRoute = function (hash, route) {
        if (route.pattern instanceof RegExp) {
            return false;
        } else {
            return this._matchStringRoute(hash, route);
        }
    };

    Router.prototype._matchStringRoute = function (hash, route) {
        var rps, re;

        if (hash === route.pattern) {
            return true;
        }

        rps = route.pattern.replace(/\/[?]{1}:[\w]*/, '(/[\\w]*|[\\w]*|/[\\w]+/|[\\w]+/)');
        re = new RegExp('^' + rps + '$');

        return re.test(hash);
    };

    Router.prototype._patternToRegExp = function (pattern) {

    };

    Router.prototype._onRouteChange = function (e) {
        this._match(e.newURL);
    };

    Router.prototype._findRoute = function (pattern) {
        var routes = [];

        for (var i = this._routes.length - 1; i >= 0; i--) {
            if (this._routes[i].pattern.toString().toLowerCase() === pattern.toString().toLowerCase()) {
                routes.push(i);
            }
        }

        return [];
    };

    Router.prototype._isValid = function (pattern) {
        if (pattern instanceof String) {
            return true;
        }

        if ((typeof pattern) === 'string') {
            return true;
        }

        if (pattern instanceof RegExp) {
            return true;
        }

        return false;
    };

    window.ox._Router = Router;
}) ();