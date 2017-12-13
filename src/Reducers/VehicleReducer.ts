import { initialAppState } from './InitialState';
import { AppAction, LOAD_VEHICLE_SUCCESS } from '../Actions/Actions';
import { Vehicle } from '../common/models';

export default function VehicleReduer(state: Vehicle[]  = initialAppState.vehicles, action: AppAction): Vehicle[] {
    switch (action.type) {
        case LOAD_VEHICLE_SUCCESS:
        return Object.assign([], action.data);
        default:
        return state;
    }
}