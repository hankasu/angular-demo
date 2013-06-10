"use strict";

eventsApp.controller("EventController",
    function EventController($scope, eventData) {
        
        $scope.event = eventData.getEvent();
        
        $scope.sortorder = "name";
        
        $scope.upVoteSession = function(session) {
            session.upvoteCount++;  
        };
        
        $scope.downVoteSession = function(session) {
            session.upvoteCount--;  
        };
    }
);
