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
                .then(addImageUrl)
                .then(function (movies) {
                    vm.result = movies;
                });
        }

        function extractMovies(result) {
            return result.data.movies;
        }

        function addImageUrl(movies) {
            return movies.map(function (movie) {
                movie.image = "http://img.omdbapi.com/?" + "i=" + movie.imdbID + "&apikey=" + MovieApi.apiKey;
                //movie.image = movie.poster;

                // http://www.imdb.com/title/{{vm.result[$index+1].imdbID}}
                movie.imdbUrl = 'http://www.imdb.com/title/' + movie.imdbID;
                
                return movie;
            });
        }

        function takeRandom9(movies) {
            movies.sort( function() { return 0.5 - Math.random() } );
            return movies.slice(0, 9);
        }
    }


}());