import * as React from 'react';
import PlanetForm from '../components/PlanetForm';
import { Destination, ResultRequest, GameDispatch, Planet, Vehicle } from '../common/models';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { FindFalconeResults } from '../Actions/gameActions';
import { GameReducer } from '../Reducers/index';
import { AppState } from '../Reducers/InitialState';

export interface FindFalconState {
  destinations: Destination[];
  FindBtnEnable: boolean;
}
class FindFalcon extends React.Component < GameDispatch & AppState, FindFalconState > {
  constructor(props: any) {
    super(props);
    this.state = {
      destinations: [],
      FindBtnEnable: false
    };
    for (let i = 1; i < 5; i++) {
      this.state.destinations.push({name: `Destination${i}`, 
            planet: {name: '', distance: 0},
            vehicle: { name: '', max_distance: 0, speed: 0, total_no: 0}});
        }
    this.onChange = this.onChange.bind(this);
    this.SubmitResults = this.SubmitResults.bind(this);
  }

  onChange(evt: any): void {
    const newDestinations = [...this.state.destinations];
    let idx = this.state.destinations.findIndex(x => x.name === evt.target.name);
    
    if (evt.target.type === 'radio') {
      let plt =  this.props.vehicles.filter((x: Vehicle) => x.name === evt.target.value);
      newDestinations[idx].vehicle =  plt[0];
    } else {
      let plt = this.props.planets.filter((x: Planet) => x.distance === +evt.target.value); 
      newDestinations[idx].planet =  plt[0];
    }

    let emptyDest = this.state.destinations.find(x => x.vehicle.name === '');
    debugger;
    this.setState({destinations: newDestinations, FindBtnEnable: emptyDest === undefined ? true : false});    
    // let idx = this.state.destinations.findIndex(x => x.name === evt.target.name);
    // if (evt.target.type === 'radio') {
    //   newDestinations[idx].vehicle = this.props.vehicles.find(x => x.name === evt.target.value) as Vehicle;
      // reduce count of the vehicle
      // newDestinations.forEach(element => {
      //   if (element.vehicle.name !== '') {
      //     // debugger;
      //     let idxVehicle = this.props.vehicles.findIndex(x => x.name === evt.target.value);
      //     this.props.vehicles[idxVehicle].total_no -= 1;
      //   }
      // });
    // } else  {
    //   newDestinations[idx].planet = this.state.planets.find(x => x.distance === +evt.target.value) as Planet;     
    // }
  }

  SubmitResults() {
    let req: ResultRequest = {token: '', planet_names: [], vehicle_names: []} as ResultRequest;
    this.state.destinations.map((x: Destination) => {
      req.planet_names.push(x.planet.name);
      req.vehicle_names.push(x.vehicle.name);
    });
    this.props.FindFalconeResults!(req);
  }

  render() {
    const {planets, vehicles} = this.props;
    return (
      <div className="App">
        <h4>Select planets you want to search in:
        </h4>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {this
          .state
          .destinations
          .map((item: Destination, idx: number) => {
            return <PlanetForm
              key={idx}
              name={item.name}
              destination={item}
              planets={planets}
              vehicles={vehicles}
              onChange={this.onChange}/>
          })}
          </div>
          <button onClick={this.SubmitResults} disabled={!this.state.FindBtnEnable}> 
          <Link to="/result">Find Falcone</Link>
          </button>
      </    div>
    );
  }
}

function mapStateToProps(state: AppState, ownProps: {} ): AppState {
  return state ;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<GameReducer>): GameDispatch {
  return {
    FindFalconeResults: (data: ResultRequest) => dispatch(FindFalconeResults(data))
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFalcon);