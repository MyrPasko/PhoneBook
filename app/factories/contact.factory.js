;(function () {
    "use strict";

    angular
        .module("app")
        .factory("contactFactory", contactFactory);

    function contactFactory($localStorage) {
        return {
            currentObj: {},
            people: $localStorage.$default([]),
            id: Date.now()
        }
    }
})();