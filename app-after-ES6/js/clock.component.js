// Controller implementation
class clockController {
    // Injections
    constructor($element){
        this.$element = $element;
    }
    // Wait for bindings, linked template, DOM ready
    $postLink () {
        // Get the zone time using JS (from binding) 
        let date = new Date().toLocaleString("es-ES", {timeZone: this.zone});
        let dateArray = date.split(" ")[1].split(":");
        let seconds = Number(dateArray[2]);
        let minutes = Number(dateArray[1]);
        let hours = Number(dateArray[0]);
        // Clock's hands position calculations
        let hands = {
            hours: (hours * 30) + (minutes / 2),
            minutes: (minutes * 6),
            seconds: (seconds * 6)
        };
        // Position hands when the data is linked and DOM ready
        angular.forEach(hands, (angle, hand) => {
            let target = this.$element[0].getElementsByClassName(hand)[0];
            target.style.webkitTransform = `rotateZ(${angle}deg)`;
            target.style.transform = `rotateZ(${angle}deg)`;
        });
    };
}

// Component declaration
let clockComponent = {
    bindings: {
        zone: "<"
    },
    controller: clockController,
    template: `<article class='clock'> 
                    <div class='hours-container'>
                        <div class='hours'></div>
                    </div>
                    <div class='minutes-container'> 
                        <div class='minutes'></div>
                    </div>
                    <div class='seconds-container'>
                        <div class='seconds'></div>
                    </div>
               </article>`
};

// Component registration
angular
    .module("clocks")
    .component("clock", clockComponent);