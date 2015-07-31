(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    function SearchController($location, GoogleApi) {
        var vm = this;

        vm.search = search;

        function search() {
            console.log("Search", vm.from, vm.to);
            GoogleApi.search(vm.from, vm.to).then(goToMovie);
        }

        function goToMovie(result) {
            var duration = result.routes[0].legs[0].duration.value;
            $location.url('/movies' + '?duration=' + duration);
        }
    }

}());