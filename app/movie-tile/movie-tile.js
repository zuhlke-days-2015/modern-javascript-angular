(function () {
    'use strict';

    angular
        .module('app')
        .directive('movieTile', function() {
			return {
				scope: {},
					bindToController: {
						imdbUrl: '=',
						imdbRating: '=',
						imageUrl: '=',
						title: '=',
						runtime: '='
					},
					controller: function () { },
					controllerAs: 'ctrl',
					templateUrl: 'app/movie-tile/movie-tile.html'
			};
		});
}());