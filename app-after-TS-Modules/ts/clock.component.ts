/// <reference path="../typings/clock.d.ts" />
import { IHands } from "clock";
// import * as clockTypes from "clock";

// Controller implementation
class clockController implements ng.IController {
    // TimeZone passed to this compoment as binding
    private zone: string;
    // Injections
    constructor(public $element){
    }
    // Wait for bindings, linked template, DOM ready
    $postLink () {
        // Get the zone time using JS (from binding) (Fake: won't work in production)
        let date: string = new Date().toLocaleString("es-ES", {timeZone: this.zone});
        let dateArray: string[] = date.split(" ")[1].split(":");
        let seconds: number = Number(dateArray[2]);
        let minutes: number = Number(dateArray[1]);
        let hours: number = Number(dateArray[0]);
        // Clock's hands position calculations
        let hands: IHands = {
            hours: (hours * 30) + (minutes / 2),
            minutes: (minutes * 6),
            seconds: (seconds * 6)
        };
        // Position hands when the data is linked and DOM ready
        angular.forEach(hands, (angle: number, hand: string): void => {
            let target: HTMLElement = this.$element[0].getElementsByClassName(hand)[0];
            target.style.webkitTransform = `rotateZ(${angle}deg)`;
            target.style.transform = `rotateZ(${angle}deg)`;
        });
    };
}

// Component declaration
let clockComponent: ng.IComponentOptions = {
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