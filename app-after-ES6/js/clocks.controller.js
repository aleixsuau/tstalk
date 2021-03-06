class ClocksController {
    // Injections
    constructor(clocksService){
        this.clocksService = clocksService;
        this.selectedItem;
        this.selectedZones = clocksService.selectedZones;
    };
    
    // Filter zones
    filterZones(query) {
       return this.clocksService.filterZones(query);
    };
    // Add a zone to selectedZones
    addZone(zone) {
        this.clocksService.addZone(zone);
        this.selectedItem = "";
    };
    // Remove a zone from selectedZones
    removeZone (zone) {
        this.clocksService.removeZone(zone);
    };
}

angular
    .module("clocks")
    .controller("ClocksController", ClocksController);