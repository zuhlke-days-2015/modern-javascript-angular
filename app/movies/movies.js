(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);


    function MovieController($routeParams, $location, MovieApi) {
        var vm = this;

        activate();

        function activate() {
            if ($routeParams.duration) {
                searchMovie($routeParams.duration);
            } else {
                $location.url('/search');
            }
        }

        function searchMovie(duration) {
            MovieApi.searchByDuration(duration)
                .then(extractMovies)
                .then(takeRandom9)
                .then(enhanceImgUrlWithApiKey)
                .then(function (movies) {
                    vm.result = movies;
                });
        }

        function extractMovies(result) {
            return result.data.movies;
        }

        function enhanceImgUrlWithApiKey(movies) {
            return movies.map(function (movie) {
                movie.omdbImgUrl = movie.omdbImgUrl + '&apikey=' + MovieApi.apiKey;
                return movie;
            });
        }

        function takeRandom9(movies) {
            movies.sort( function() { return 0.5 - Math.random() } );
            return movies.slice(0, 9);
        }
    }


}());