"use strict";

eventsApp.factory("eventData", function($resource, $http, $q) {
    var resource = $resource("data/:id", { id: "@id"});
	return {
	    getEvent: function() {
            var deferred = $q.defer();
            resource.get({id: 1},
                function(event) {
                    deferred.resolve(event);
                },
                function(response) {
                    deferred.reject(response);
                });
                
            return deferred.promise;
	    },
        getAllEvents: function(callback) {
            $http({ method: "GET", url: "data/1.json"}).success(function(event) {
                callback(event);
            });
        }
	};
});
