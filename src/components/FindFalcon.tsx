import * as React from 'react';
import PlanetForm from '../components/PlanetForm';
import { Destination, Planet, Vehicle, ResultRequest } from '../common/models';
import { GetPlanets, GetVehicles, Result, Token } from '../common/Service/DataService';
import { Link } from 'react-router-dom';
export interface AppState {
  destinations: Destination[];
  planets: Planet[];
  vehicles: Vehicle[];
}
class FindFalcon extends React.Component < {},
AppState > {
  constructor(props: any) {
    super(props);
    this.state = {
      destinations: [],
      planets: [],
      vehicles: []
    };
    for (let i = 1; i < 5; i++) {
      this
        .state
        .destinations
        .push({name: `Destination${i}`, 
        planet: {name: '', distance: 0},
        vehicle: { name: '', max_distance: 0, speed: 0, total_no: 0}});
    }
    this.onChange = this.onChange.bind(this);
    this.SubmitResults = this.SubmitResults.bind(this);
  }
 
  componentDidMount() {
    GetPlanets().then((data: Planet[]) => this.setState({planets: data}))
    // tslint:disable-next-line:no-console
    .catch((err: Error) => console.log('error while fetching planets'));

    GetVehicles().then((data: Vehicle[]) => this.setState({vehicles: data}))
    // tslint:disable-next-line:no-console
    .catch((err: Error) => console.log('error while fetching vehicles'));
  }

  onChange(evt: any): void {
    // debugger;
    let idx = this.state.destinations.findIndex(x => x.name === evt.target.name);
    const newDestinations = [...this.state.destinations];
    const newVehicles = [...this.state.vehicles];
    if (evt.target.type === 'radio') {
      newDestinations[idx].vehicle = this.state.vehicles.find(x => x.name === evt.target.value) as Vehicle;
      // reduce count of the vehicle
      newDestinations.forEach(element => {
        if (element.vehicle.name !== '') {
          // debugger;
          let idxVehicle = newVehicles.findIndex(x => x.name === evt.target.value);
          newVehicles[idxVehicle].total_no -= 1;
        }
      });
    } else  {
      newDestinations[idx].planet = this.state.planets.find(x => x.distance === +evt.target.value) as Planet;     
    }
    this.setState({destinations: newDestinations, vehicles: newVehicles});
  }

  SubmitResults() {
    let req: ResultRequest = {token: '', planet_names: [], vehicle_names: []} as ResultRequest;
    this.state.destinations.map((x: Destination) => {
      req.planet_names.push(x.planet.name);
      req.vehicle_names.push(x.vehicle.name);
    });
    Token().then((token: string) => {
      req.token = token;
      return Result(req);
    }).then((result: any) => console.log(result));
  }

  render() {
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
              planets={this.state.planets}
              vehicles={this.state.vehicles}
              onChange={this.onChange}/>
          })}
          </div>
          <button onClick={this.SubmitResults}> 
          <Link to="/result">Find Falcone</Link>
          </button>
      </div>
    );
  }
}

export default FindFalcon;
