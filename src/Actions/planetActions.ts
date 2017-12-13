import { GetPlanets } from '../common/Service/DataService';
import { Planet } from '../common/models';
import { AppAction, LOAD_PLANET_SUCCESS } from './Actions';

export const loadPlanetsSuccess = (data: Planet[]): AppAction => ({ type: LOAD_PLANET_SUCCESS, data });
export const loadPlanets = () => {
    return (dispatch: any) => {
        return GetPlanets().then( (planets: Planet[]) => 
        dispatch(loadPlanetsSuccess(planets)))
        .catch(error => {throw(error);
        });
    };
};
