(function () {
    "use strict";

    var createApp = function (element) {
        if (!element) {
            throw 'Unable to intiate Oryx application, please provide HTML element';
        }

        if (!(element instanceof HTMLElement)) {
            throw 'Unable to intiate Oryx application, please provide HTML element';
        }
    }

    window.ox = createApp;
}) ();