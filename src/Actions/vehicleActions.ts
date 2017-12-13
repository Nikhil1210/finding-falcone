import { GetVehicles } from '../common/Service/DataService';
import { Vehicle } from '../common/models';
import { AppAction, LOAD_VEHICLE_SUCCESS } from './Actions';

export const loadVehiclesSuccess = (data: Vehicle[]): AppAction => ({ type: LOAD_VEHICLE_SUCCESS, data });
export const loadVehicles = () => {
    return (dispatch: any) => {
        return GetVehicles().then((vehicles: Vehicle[]) => 
        dispatch(loadVehiclesSuccess(vehicles)))
        .catch(error => {throw(error);
        });
    };
};
