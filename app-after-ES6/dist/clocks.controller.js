function ClocksController(clocksService) {
    var _this = this;
    this.selectedItem;
    // this.timeZones = clocksService.timeZones;
    this.selectedZones = clocksService.selectedZones;
    // Filter zones
    this.filterZones = function (query) {
        return clocksService.filterZones(query);
    };
    // Add a zone to selectedZones
    this.addZone = function (zone) {
        clocksService.addZone(zone);
        _this.selectedItem = "";
    };
    // Remove a zone from selectedZones
    this.removeZone = function (zone) {
        clocksService.removeZone(zone);
    };
}
angular
    .module("clocks")
    .controller("ClocksController", ClocksController);
