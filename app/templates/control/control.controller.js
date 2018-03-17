;(function () {
    "use strict";

    angular
        .module("app")
        .controller("ControlController", ControlController);

    function ControlController(contactFactory, $localStorage) {

        var vm = this;

        vm.man = contactFactory.currentObj;
        vm.factory = contactFactory.factory;
        vm.removeMan = removeMan;
        vm.$storage = $localStorage;

        function removeMan() {
            var idForRemoving = vm.man.id;

            delete $localStorage[idForRemoving];
        }
    }
})();



