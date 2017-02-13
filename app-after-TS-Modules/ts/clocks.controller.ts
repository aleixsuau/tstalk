/// <reference path="../typings/clock.d.ts" />
import { IClocksService } from "clock";

class ClocksController implements ng.IController {
    public selectedItem: string;
    public selectedZones: string[];
    // Injections
    constructor(public clocksService: IClocksService){
        this.selectedItem;
        this.selectedZones = clocksService.selectedZones;
    }    
    // Filter zones
    filterZones (query: string): string[] {
       return this.clocksService.filterZones(query);
    };
    // Add a zone to selectedZones
    addZone (zone: string): void {
        this.clocksService.addZone(zone);
        this.selectedItem = "";
    };
    // Remove a zone from selectedZones
    removeZone (zone: string): void {
        this.clocksService.removeZone(zone);
    };
}

angular
    .module("clocks")
    .controller("ClocksController", ClocksController);