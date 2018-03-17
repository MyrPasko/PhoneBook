;(function () {
    "use strict";

    angular
        .module("app")
        .controller("ChangeController", ChangeController);

    function ChangeController(contactFactory) {

        var vm = this;

        vm.man = contactFactory.currentObj;
    }
})();