import { Planet, Vehicle, GameState } from '../common/models';

export interface AppState {
    result: GameState;
    planets: Planet[];
    vehicles: Vehicle[];
}

export const initialAppState: AppState = {
    planets: [],
    vehicles: [],
    result: {
        planet_name: '',
        status: '',
        time_taken: 0
    }
};
