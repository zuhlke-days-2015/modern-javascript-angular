(function () {
    'use strict';

    angular
        .module('app')
        .factory('MovieApi', MovieApi);

    function MovieApi($http) {
        var baseUrl = "https://zuhlke-days-2015-movie-api.azurewebsites.net/discover/movie?";
        var apiKey = localStorage.getItem('apikey'); // works on my machine ;-)

        return {
            searchByDuration: searchByDuration
        };

        function searchByDuration(duration) {
            var fromDuration = parseInt(duration, 10) * 0.8;
            var params = "runtimeFrom=" + fromDuration + "&runtimeTo=" + duration + "&apikey=" + apiKey;
            return $http.get(baseUrl + params)
                .then(extractMovies)
                .then(enhanceImgUrlWithApiKey);
        }
        
        function extractMovies(result) {
            return result.data.movies;
        }

        function enhanceImgUrlWithApiKey(movies) {
            return movies.map(function (movie) {
                movie.omdbImgUrl = movie.omdbImgUrl + '&apikey=' + apiKey;
                return movie;
            });
        }

    }

}());