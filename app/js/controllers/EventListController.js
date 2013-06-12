"use strict";

eventsApp.controller("EventListController",
    function EventListController($scope, eventData) {
        var clone = function (obj) {
            if (null == obj || "object" != typeof obj) return obj;
            var copy = obj.constructor();
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }
            return copy;
        };
        
        eventData.getAllEvents(function(event) {
            var event1 = clone(event);
            event1.name = "Testing made easy";
            event1.id = 1;
            event.id = 0;
            
            $scope.events = [event, event1];    
        });
    }
);