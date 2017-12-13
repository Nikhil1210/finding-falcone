import * as React from 'react';
import * as Redux from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GameReducer } from '../Reducers/index';
import { GameDispatch } from '../common/models';
import { ResetGame } from '../Actions/gameActions';
import { AppState } from '../Reducers/InitialState';
// interface ResultProps {
//     planet_name: string;
//     status: string;
//     time_taken: number;
// }
class Result extends React.Component<AppState & GameDispatch, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const {result } = this.props;
        return ( 
            <div>
                {status === 'success'
                ? <div>
                     <h4>Success! Congratulations on Finding Falcone. King Shan is mighty pleased</h4>
                     <div> Time taken: {result.time_taken}</div>
                     <div> Planet: {result.planet_name}</div>
                     }
                </div>
                : <div> <h4> Better luck next time! </h4></div>  }
                <button onClick={this.props.ResetGame}><Link to="/">Start Again</Link></button>
            </div>
        ); 
    }
}

function mapStateToProps(state: AppState, ownProps: {} ): AppState {
   return state ;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<GameReducer>): GameDispatch {
   return {
    ResetGame: () => dispatch(ResetGame())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);