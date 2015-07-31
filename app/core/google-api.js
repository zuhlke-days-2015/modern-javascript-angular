(function () {
    'use strict';

    angular
        .module('app')
        .factory('GoogleApi', GoogleApi);

    function GoogleApi($q) {
        var directionsService = new google.maps.DirectionsService();

        return {
            search: search
        };

        function search(from, to) {
            var defered = $q.defer();
            var request = {
                origin: from,
                destination: to,
                travelMode: google.maps.TravelMode.TRANSIT
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    defered.resolve(response);
                } else {
                    defered.reject(status);
                }
            });

            return defered.promise;
        }
    }

}());