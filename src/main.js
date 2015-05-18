"use strict";

(funciton () {
    var create_app = function (element) {
        if (!element) {
            throw 'Unable to intiate Oryx application, please provide HTML element';
        }

        if (!(element instanceof HTMLElement)) {
            throw 'Unable to intiate Oryx application, please provide HTML element';
        }
    }

    window.ox = create_app;
} ());