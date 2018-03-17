;(function () {
    "use strict";

    angular
        .module("app")
        .controller("MainController", MainController);

    function MainController(contactFactory) {

        var vm = this;

        vm.people = contactFactory.people;
        vm.setCurrentObj = setCurrentObj;
        vm.sortparam = "name";

        function setCurrentObj(obj) {
            contactFactory.currentObj = obj;
        }

        function getSortParam(e) {

        }
    }
})();