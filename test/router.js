describe("Router unit tests", function() {

    describe("Router class", function() {
        it("should be defined", function() {
            expect(ox._Router).toBeDefined();
        });
        it("should be function", function() {
            expect(typeof ox._Router).toEqual('function');
        });
    });

    describe("Route validity", function() {
        var router = new ox._Router();

        it("string should be valid", function() {
            expect(router._isValid('route')).toEqual(true);
        });
        it("empty string should be valid", function() {
            expect(router._isValid('')).toEqual(true);
        });
        it("regex should be valid", function() {
            expect(router._isValid(/ab+c/)).toEqual(true);
        });
        it("regex with new should be valid", function() {
            expect(router._isValid(new RegExp("ab+c"))).toEqual(true);
        });
        it("no parameters should be invalid", function() {
            expect(router._isValid()).toEqual(false);
        });
        it("null should be invalid", function() {
            expect(router._isValid(null)).toEqual(false);
        });
        it("undefined should be invalid", function() {
            expect(router._isValid(undefined)).toEqual(false);
        });
        it("NaN should be invalid", function() {
            expect(router._isValid(NaN)).toEqual(false);
        });
        it("zero should be invalid", function() {
            expect(router._isValid(0)).toEqual(false);
        });
        it("number should be invalid", function() {
            expect(router._isValid(412)).toEqual(false);
        });
        it("boolean should be invalid", function() {
            expect(router._isValid(false)).toEqual(false);
        });
        it("object should be invalid", function() {
            expect(router._isValid({})).toEqual(false);
        });
        it("array should be invalid", function() {
            expect(router._isValid([])).toEqual(false);
        });
        it("function should be invalid", function() {
            expect(router._isValid(function () {})).toEqual(false);
        });
    });

});