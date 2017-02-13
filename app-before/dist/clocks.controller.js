function ClocksController(clocksService) {
    var self = this;
    // self.timeZones = clocksService.timeZones;
    self.selectedZones = clocksService.selectedZones;
    // Filter zones
    self.filterZones = function (query) {
        return clocksService.filterZones(query);
    };
    // Add a zone to selectedZones
    self.addZone = function (zone) {
        clocksService.addZone(zone);
        self.selectedItem = "";
    };
    // Remove a zone from selectedZones
    self.removeZone = function (zone) {
        clocksService.removeZone(zone);
    };
}
angular
    .module("clocks")
    .controller("ClocksController", ClocksController);
