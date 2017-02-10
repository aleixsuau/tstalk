// Controller implementation
function clockController($element) {
    var _this = this;
    // Wait for bindings, linked template, DOM ready
    this.$postLink = function () {
        // Get the zone time using JS (from binding) 
        var date = new Date().toLocaleString("es-ES", { timeZone: _this.zone });
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
            target.style.webkitTransform = "rotateZ(" + angle + "deg)";
            target.style.transform = "rotateZ(" + angle + "deg)";
            if (hand === 'minutes') {
                target.parentNode.setAttribute('data-second-angle', hands.seconds);
            }
        });
    };
}
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
