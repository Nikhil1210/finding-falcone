import { combineReducers } from 'redux';
import { GameState, game } from './gameReducer';

export interface GameReducer {
    game: GameState;
}

export const reducers = combineReducers < GameReducer > ({
    game
});
