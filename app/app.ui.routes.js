;(function () {
    "use strict";

    angular
        .module("app")
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/main");

            $stateProvider
                .state("main", {
                    url: "/main",
                    templateUrl: "templates/main/main.html",
                    controller: "MainController"
                })
                .state("control", {
                    url: "/control",
                    templateUrl: "templates/control/control.html",
                    controller: "ControlController"
                })
                .state("change", {
                    url: "/change",
                    templateUrl: "templates/change/change.html",
                    controller: "ChangeController"
                })
                .state("save", {
                    url: "/save",
                    templateUrl: "templates/save/save.html",
                    controller: "SaveController"
                });
        })
})();