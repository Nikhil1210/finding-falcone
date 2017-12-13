import { initialAppState } from './InitialState';
import { AppAction, LOAD_PLANET_SUCCESS } from '../Actions/Actions';
import { Planet } from '../common/models';

export default function PlanetReduer(state: Planet[]  = initialAppState.planets, action: AppAction): Planet[] {
    switch (action.type) {
        case LOAD_PLANET_SUCCESS:
        return Object.assign([], action.data);
        default:
        return state;
    }
}