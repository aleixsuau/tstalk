var ClocksController = (function () {
    // Injections
    function ClocksController(clocksService) {
        this.clocksService = clocksService;
        this.selectedItem;
        this.selectedZones = clocksService.selectedZones;
    }
    ;
    // Filter zones
    ClocksController.prototype.filterZones = function (query) {
        return this.clocksService.filterZones(query);
    };
    ;
    // Add a zone to selectedZones
    ClocksController.prototype.addZone = function (zone) {
        this.clocksService.addZone(zone);
        this.selectedItem = "";
    };
    ;
    // Remove a zone from selectedZones
    ClocksController.prototype.removeZone = function (zone) {
        this.clocksService.removeZone(zone);
    };
    ;
    return ClocksController;
}());
angular
    .module("clocks")
    .controller("ClocksController", ClocksController);
