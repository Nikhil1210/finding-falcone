import * as React from 'react';
import { Vehicle } from '../../common/models';
// import { SelectOption } from '../../common/models';

export interface RadioProps {
  name : string;
  label : string;
  onChange : (evt : any) => void;
  value : string;
  options : Vehicle[];
}
const RadioInput = ({
  name,
  label,
  onChange,
  value,
  options
}: RadioProps) => {
  return (
    <div className="radio" onChange={onChange} 
      style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
      {options.map((option) => {
        return (
            <label key={option.name}>
              <input type="radio" value={option.name} name={name} />{option.name} ({option.total_no})
            </label>
        );
      })}
      
      {/* {options.map((option) => {
        return (
          <div className="radio" key={option.name} onChange={onChange}>
            <label><input type="radio" value={value} name={name} />{option.name} ({option.total_no})</label>
          </div>
        );
      })} */}
    </div>
  );
};

export default RadioInput;