export interface SelectOption {
    value: string;
    text: string;
}

export interface Destination {
    name: string;
    planet: Planet;
    vehicle: Vehicle;
}
export interface Vehicle {
    name: string;
    total_no: number;
    max_distance: number;
    speed: number;
}
export interface Planet {
    name: string;
    distance: number;
}

export  interface ResultRequest {
    token: string;
    planet_names: string[];
    vehicle_names: string[];
}

export interface Result {
    status: string;
    planet_name: string;
    time_taken: number;
}

export interface GameDispatch {
    PublishResult?: (data: Result) => {};
    ResetGame?: () => {};
}