import { combineReducers } from 'redux';
import result  from './ResultReducer';
import planets  from './PlanetReducer';
import vehicles  from './VehicleReducer';
import { Planet, Vehicle, GameState } from '../common/models';

export interface GameReducer {
    result: GameState;
    planets: Planet[];
    vehicles: Vehicle[];
}

export const reducers = combineReducers <GameReducer> ({
    result,
    planets,
    vehicles
});
