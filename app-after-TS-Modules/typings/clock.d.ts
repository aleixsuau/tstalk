// Ambient module
declare module "clock" {
    export interface IHands {
        hours: number,
        minutes: number,
        seconds: number
    }

    export interface IClocksService {
        selectedZones: string[];
        timeZones: string[];
        filterZones (query: string): string[];
        addZone (zone: string): void;
        removeZone (zone: string): void;
    }
}

/*interface IClocksService {
        selectedZones: string[];
        timeZones: string[];
        filterZones (query: string): string[];
        addZone (zone: string): void;
        removeZone (zone: string): void;
    }*/