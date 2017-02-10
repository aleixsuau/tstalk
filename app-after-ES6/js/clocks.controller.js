function ClocksController (clocksService) {
    this.selectedItem;
    // this.timeZones = clocksService.timeZones;
    this.selectedZones = clocksService.selectedZones;
    // Filter zones
    this.filterZones = (query) => {
       return clocksService.filterZones(query);
    };
    // Add a zone to selectedZones
    this.addZone = (zone) => {
        clocksService.addZone(zone);
        this.selectedItem = "";
    };
    // Remove a zone from selectedZones
    this.removeZone = (zone) => {
        clocksService.removeZone(zone);
    };
}

angular
    .module("clocks")
    .controller("ClocksController", ClocksController);