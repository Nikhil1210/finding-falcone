import * as React from 'react';
import * as Redux from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GameState } from '../Reducers/gameReducer';
import { GameReducer } from '../Reducers/index';
import { GameDispatch } from '../common/models';
import { ResetGame } from '../Actions/gameActions';
interface ResultProps {
    planet_name: string;
    status: string;
    time_taken: number;
}
class Result extends React.Component<ResultProps & GameDispatch & {}, {}> {
    constructor(props: GameState) {
        super(props);
    }
    render() {
        const {status, time_taken, planet_name } = this.props;
        return ( 
            <div>
                {status === 'success'
                ? <div>
                     <h4>Success! Congratulations on Finding Falcone. King Shan is mighty pleased</h4>
                     <div> Time taken: {time_taken}</div>
                     <div> Planet: {planet_name}</div>
                     }
                </div>
                : <div> <h4> Better luck next time! </h4></div>  }
                <button onClick={this.props.ResetGame}><Link to="/">Start Again</Link></button>
            </div>
        );
    }
}

function mapStateToProps(state: GameState, ownProps: {} ): ResultProps {
   return state ;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<GameReducer>): GameDispatch {
   return {
    ResetGame: () => dispatch(ResetGame())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);