"use strict";

eventsApp.factory("eventData", function($resource, $http, $q) {
    var resource = $resource("data/:id", { id: "@id"});
	return {
	    getEvent: function() {
            var deferred = $q.defer();
            $http({ method: "GET", url: "data/1.json"}).success(function(event) {
                deferred.resolve(event);
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
