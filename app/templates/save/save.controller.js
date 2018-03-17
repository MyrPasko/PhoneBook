;(function () {
    "use strict";

    angular
        .module("app")
        .controller("SaveController", SaveController);

    function SaveController(contactFactory, $localStorage) {

        var vm = this;

        vm.addMan = addMan;
        vm.factory = contactFactory.factory;
        vm.id = contactFactory.id;
        vm.$storage = $localStorage;

        function addMan(name, number, email) {
            vm.$storage[contactFactory.id] =
                {
                    "name": name,
                    "number": number,
                    "email": email,
                    "id": contactFactory.id
                };
            contactFactory.id += 1;
        }
    }
})();