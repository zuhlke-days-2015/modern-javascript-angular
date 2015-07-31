(function () {
    'use strict';

    angular
        .module('app')
        .config(RouteConfig);


    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/movies', {
                templateUrl: 'app/movies/movies.html',
                controller: 'MovieController',
                controllerAs: 'vm'
            });
    }

}());