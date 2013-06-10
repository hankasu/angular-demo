"use strict";

eventsApp.controller("EditEventController",
    function EditEventController($scope) {
        $scope.saveEvent = function(event, editEventForm) {
            if(editEventForm.$valid) {
                alert("Event \"" + event.name + "\" was saved!");      
            }
        };
        
        $scope.cancelEdit = function() {
            window.location = "#/";
        };
    }    
);