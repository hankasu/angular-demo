"use strict";

eventsApp.controller("EventController",
    function EventController($scope) {
        
        $scope.sortorder = "name";
        $scope.event = {
            name: "Angular Boot Camp",
            date: "1/1/2013",
            time: "10:30am",
            location: {
                address: "Google Headquarters",
                city: "Mountain View",
                province: "CA"
            },
            imageUrl: "img/angular.png",
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Bob Smith",
                    duration: 2,
                    level: "Advanced",
                    abstract: "In this session, you will learn the ins and outs of directives.",
                    upvoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "John Doe",
                    duration: 1,
                    level: "Introductory",
                    abstract: "We will take a closer look at scopes.",
                    upvoteCount: 0
                },
                {
                    name: "Well Behaved Controllers",
                    creatorName: "Jane Doe",
                    duration: 3,
                    level: "Intermediate",
                    abstract: "Controllers are the beginning of everything in Angular.",
                    upvoteCount: 0
                }
            ]
        };
        
        $scope.upVoteSession = function(session) {
            session.upvoteCount++;  
        };
        
        $scope.downVoteSession = function(session) {
            session.upvoteCount--;  
        };
    }
);