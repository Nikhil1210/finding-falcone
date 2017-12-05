import * as React from 'react';
import SelectInput from './common/SelectInput';
import RadioInput from './common/RadioInput';
import { Planet, Destination, Vehicle } from '../common/models';
export interface PlanetProps {
    name: string;
    destination: Destination;
    planets: Planet[];
    vehicles: Vehicle[];
    onChange: (evt: any) => void;
}
const PlanetForm = ({name, destination, vehicles, onChange, planets}: PlanetProps) => {
    return (
        <div>
        <div>
            <SelectInput
                name={name}
                label={name}
                value={destination.planet.distance}
                defaultOption="Select"
                options={planets}
                onChange={onChange}/>
        </div>
        {destination.planet.distance !== 0 && <div>
            <RadioInput
                name={name}
                label={name}
                value={destination.vehicle.name}
                options={vehicles}
                onChange={onChange}/>
        </div>}
        </div>
    );
};

export default PlanetForm;