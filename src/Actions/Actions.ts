import { Result, Planet, Vehicle } from '../common/models';

export type AppAction = {
    type: '@@APP/PUBLISH_RESULT',
    data: Result
} | {
    type: '@@APP/RESET_GAME'
} | {
    type: '@@APP/LOAD_PLANET_SUCCESS',
    data: Planet[]
}| {
    type: '@@APP/LOAD_VEHICLE_SUCCESS',
    data: Vehicle[]
};

export const PUBLISH_RESULT = '@@APP/PUBLISH_RESULT';
export const RESET_GAME = '@@APP/RESET_GAME';
export const LOAD_PLANET_SUCCESS = '@@APP/LOAD_PLANET_SUCCESS';
export const LOAD_VEHICLE_SUCCESS = '@@APP/LOAD_VEHICLE_SUCCESS';
