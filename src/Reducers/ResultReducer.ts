import  { initialAppState } from './InitialState';
import { GameState } from '../common/models';
import { AppAction, PUBLISH_RESULT, RESET_GAME } from '../Actions/Actions';
export default function result(state: GameState = initialAppState.result, action: AppAction): GameState {
    switch (action.type) {
        case PUBLISH_RESULT: {
            return Object.assign({}, action.data);
        }
        case RESET_GAME:
            return Object.assign({}, initialAppState.result);
        default:
            return state;
    }
}
