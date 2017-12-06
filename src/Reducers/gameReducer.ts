import { GameAction, PUBLISH_RESULT, RESET_GAME } from '../Actions/gameActions';

export interface GameState {
    planet_name: string;
    status: string;
    time_taken: number;
}
const initializeState: GameState = {
    planet_name: '',
    status: '',
    time_taken: 0
};

export function game(state: GameState = initializeState, action: GameAction): GameState {
    switch (action.type) {
        case PUBLISH_RESULT:
            return Object.assign({}, action.data);
        case RESET_GAME:
            return Object.assign({}, initializeState);
        default:
            return state;
    }
}
