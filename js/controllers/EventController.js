"use strict";

eventsApp.controller("EventController",
    function EventController($scope, eventData) {
        
		$scope.event = eventData.event;
        $scope.sortorder = "name";
        
        $scope.upVoteSession = function(session) {
            session.upvoteCount++;  
        };
        
        $scope.downVoteSession = function(session) {
            session.upvoteCount--;  
        };
    }
);
