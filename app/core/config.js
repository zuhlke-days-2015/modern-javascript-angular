(function () {
    'use strict';

    angular
        .module('app')
        .config(RouteConfig);

    function RouteConfig($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: "/search"
            });
    }

}());