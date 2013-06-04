"use strict";

eventsApp.filter("duration", function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return "Half hour";
            case 2:
                return "Hour";
            case 3:
                return "All day";
        }
    };
});