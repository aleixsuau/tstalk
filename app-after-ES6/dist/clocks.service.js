function clocksService($filter) {
    var _this = this;
    // User selected zones
    this.selectedZones = ["Europe/Madrid"];
    // Available zones
    this.timeZones = [
        "Pacific/Midway",
        "America/Tijuana",
        "America/Chihuahua",
        "America/Mazatlan",
        "America/Mexico_City",
        "America/Monterrey",
        "Canada/Saskatchewan",
        "America/Bogota",
        "America/Lima",
        "America/Caracas",
        "Canada/Atlantic",
        "America/La_Paz",
        "America/Santiago",
        "Canada/Newfoundland",
        "America/Buenos_Aires",
        "Atlantic/Stanley",
        "Atlantic/Azores",
        "Atlantic/Cape_Verde",
        "Africa/Casablanca",
        "Europe/Dublin",
        "Europe/Lisbon",
        "Europe/London",
        "Africa/Monrovia",
        "Europe/Amsterdam",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Bratislava",
        "Europe/Brussels",
        "Europe/Budapest",
        "Europe/Copenhagen",
        "Europe/Ljubljana",
        "Europe/Paris",
        "Europe/Prague",
        "Europe/Rome",
        "Europe/Sarajevo",
        "Europe/Skopje",
        "Europe/Stockholm",
        "Europe/Vienna",
        "Europe/Warsaw",
        "Europe/Zagreb",
        "Europe/Athens",
        "Europe/Bucharest",
        "Africa/Cairo",
        "Africa/Harare",
        "Europe/Helsinki",
        "Europe/Istanbul",
        "Asia/Jerusalem",
        "Europe/Kiev",
        "Europe/Minsk",
        "Europe/Riga",
        "Europe/Sofia",
        "Europe/Tallinn",
        "Europe/Vilnius",
        "Asia/Baghdad",
        "Asia/Kuwait",
        "Africa/Nairobi",
        "Asia/Riyadh",
        "Europe/Moscow",
        "Asia/Tehran",
        "Asia/Baku",
        "Europe/Volgograd",
        "Asia/Muscat",
        "Asia/Tbilisi",
        "Asia/Yerevan",
        "Asia/Kabul",
        "Asia/Karachi",
        "Asia/Tashkent",
        "Asia/Kolkata",
        "Asia/Kathmandu",
        "Asia/Yekaterinburg",
        "Asia/Almaty",
        "Asia/Dhaka",
        "Asia/Novosibirsk",
        "Asia/Bangkok",
        "Asia/Jakarta",
        "Asia/Krasnoyarsk",
        "Asia/Chongqing",
        "Asia/Hong_Kong",
        "Asia/Kuala_Lumpur",
        "Australia/Perth",
        "Asia/Singapore",
        "Asia/Taipei",
        "Asia/Ulaanbaatar",
        "Asia/Urumqi",
        "Asia/Irkutsk",
        "Asia/Seoul",
        "Asia/Tokyo",
        "Australia/Adelaide",
        "Australia/Darwin",
        "Asia/Yakutsk",
        "Australia/Brisbane",
        "Australia/Canberra",
        "Pacific/Guam",
        "Australia/Hobart",
        "Australia/Melbourne",
        "Pacific/Port_Moresby",
        "Australia/Sydney",
        "Asia/Vladivostok",
        "Asia/Magadan",
        "Pacific/Auckland",
        "Pacific/Fiji",
    ];
    // Filter zones
    this.filterZones = function (query) {
        return $filter('filter')(_this.timeZones, query);
    };
    // Add a zone to selectedZones
    this.addZone = function (zone) {
        if (zone) {
            var itemIndex = _this.timeZones.indexOf(zone);
            _this.timeZones.splice(itemIndex, 1);
            _this.selectedZones.push(zone);
        }
    };
    // Remove a zone from selectedZones
    this.removeZone = function (zone) {
        var itemIndex = _this.selectedZones.indexOf(zone);
        _this.selectedZones.splice(itemIndex, 1);
        _this.timeZones.push(zone);
    };
}
angular
    .module("clocks")
    .service("clocksService", clocksService);
