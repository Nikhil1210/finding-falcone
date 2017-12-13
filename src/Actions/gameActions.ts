import { Result, ResultRequest } from '../common/models';
import { PUBLISH_RESULT, RESET_GAME, AppAction } from './Actions';
import { Token, GameResult } from '../common/Service/DataService';

export const FindFalconeResults = (data: ResultRequest) => {
    return (dispatch: any) => {
        return Token().then((token: string) => {
              data.token = token;
              return GameResult(data);
            }).catch(error => 
                // tslint:disable-next-line:no-console
                (console.error(`Error while fetching token`, error)))
            .then((result: Result) => {
                PublishResult(result); 
            });
    };
};
export const PublishResult = (data: Result): AppAction => ({type: PUBLISH_RESULT, data});
export const ResetGame = (): AppAction => ({type: RESET_GAME});