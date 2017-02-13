// Controller implementation
function clockController($element) {
    var self = this;
    // Wait for bindings, linked template, DOM ready
    self.$postLink = function () {
        // Get the zone time using JS (from binding) (Fake: won't work in production) 
        var date = new Date().toLocaleString("es-ES", { timeZone: self.zone });
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
            var target = $element[0].getElementsByClassName(hand)[0];
            target.style.webkitTransform = 'rotateZ(' + angle + 'deg)';
            target.style.transform = 'rotateZ(' + angle + 'deg)';
        });
    };
}
// Component declaration
var clockComponent = {
    bindings: {
        zone: "<"
    },
    controller: clockController,
    template: "<article class='clock'>" +
        "<div class='hours-container'>" +
        "<div class='hours'></div>" +
        "</div>" +
        "<div class='minutes-container'>" +
        "<div class='minutes'></div>" +
        "</div>" +
        "<div class='seconds-container'>" +
        "<div class='seconds'></div>" +
        "</div>" +
        "</article>"
};
// Component registration
angular
    .module("clocks")
    .component("clock", clockComponent);
