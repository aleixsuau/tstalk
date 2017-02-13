interface IClocksService {
        selectedZones: string[];
        timeZones: string[];
        filterZones (query: string): string[];
        addZone (zone: string): void;
        removeZone (zone: string): void;
    }

class clocksService implements IClocksService {
    public selectedZones: string[];
    public timeZones: string[];
    // Injections
    constructor (public $filter) {
        // User's selected zones
        this.selectedZones = [];
        // Available zones
        this.timeZones = [
            "Europe/Madrid",
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
    }
    // Filter zones
    filterZones (query: string): string[] {
        return this.$filter('filter')(this.timeZones, query);
    };
    // Add a zone to selectedZones
    addZone (zone: string): void {
        if (zone) {
            let itemIndex: number = this.timeZones.indexOf(zone);
            this.timeZones.splice(itemIndex, 1);
            this.selectedZones.push(zone);
        }
    };
    // Remove a zone from selectedZones
    removeZone (zone: string): void {
        let itemIndex = this.selectedZones.indexOf(zone);
        this.selectedZones.splice(itemIndex, 1);
        this.timeZones.push(zone);
    };
}

angular
    .module("clocks")
    .service("clocksService", clocksService);