(function () {
    'use strict';

    angular
        .module('app')
        .config(RouteConfig);


    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/search/search.html',
                controller: 'SearchController',
                controllerAs: 'vm'
            });
    }

}());