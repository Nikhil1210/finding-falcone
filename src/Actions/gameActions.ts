import { Result } from '../common/models';

export type GameAction = {
    type: '@@APP/PUBLISH_RESULT',
    data: Result
} |{
    type: '@@APP/RESET_GAME'
};

export const PUBLISH_RESULT = '@@APP/PUBLISH_RESULT';
export const RESET_GAME = '@@APP/RESET_GAME';

export const PublishResult = (data: Result): GameAction => ({type: PUBLISH_RESULT, data});
export const ResetGame = (): GameAction => ({type: RESET_GAME});