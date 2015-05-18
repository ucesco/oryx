(function () {
    var callbacks = {},
        route;

    route = function (fragment, callback) {

    };

    window.addEventListener('hashchange', function (e) {
        if (!Object.keys(callbacks).length) {
            // No routes registered, no need to continue
            return;
        }
    });

    window.ox.route = route;
} ());