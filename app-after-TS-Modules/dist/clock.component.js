"use strict";
// import * as clockTypes from "clock";
// Controller implementation
var clockController = (function () {
    // Injections
    function clockController($element) {
        this.$element = $element;
    }
    // Wait for bindings, linked template, DOM ready
    clockController.prototype.$postLink = function () {
        var _this = this;
        // Get the zone time using JS (from binding) (Fake: won't work in production)
        var date = new Date().toLocaleString("es-ES", { timeZone: this.zone });
        var dateArray = date.split(" ")[1].split(":");
        var seconds = Number(dateArray[2]);
        var minutes = Number(dateArray[1]);
        var hours = Number(dateArray[0]);
        // Clock's hands position calculations
        var hands = {
            hours: (hours * 30) + (minutes / 2),
            minutes: (minutes * 6),
            seconds: (seconds * 6)
        };
        // Position hands when the data is linked and DOM ready
        angular.forEach(hands, function (angle, hand) {
            var target = _this.$element[0].getElementsByClassName(hand)[0];
            target.style.webkitTransform = "rotateZ(" + angle + "deg)";
            target.style.transform = "rotateZ(" + angle + "deg)";
        });
    };
    ;
    return clockController;
}());
// Component declaration
var clockComponent = {
    bindings: {
        zone: "<"
    },
    controller: clockController,
    template: "<article class='clock'> \n                    <div class='hours-container'>\n                        <div class='hours'></div>\n                    </div>\n                    <div class='minutes-container'> \n                        <div class='minutes'></div>\n                    </div>\n                    <div class='seconds-container'>\n                        <div class='seconds'></div>\n                    </div>\n               </article>"
};
// Component registration
angular
    .module("clocks")
    .component("clock", clockComponent);
