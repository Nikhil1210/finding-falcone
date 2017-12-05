import * as React from 'react';
import {Planet} from '../../common/models';
// import { SelectOption } from '../../common/models';

export interface SelectProps {
  name : string;
  label : string;
  onChange : (evt : any) => void;
  defaultOption : string;
  value : number;
  options : Planet[];
}
const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  options
}: SelectProps) => {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select name={name} value={value} onChange={onChange} className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.distance} value={option.distance}>{option.name}</option>;
          })
}
        </select>
      </div>
    </div>

  );
};

export default SelectInput;