import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { reducers, GameReducer } from './Reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { initialAppState } from './Reducers/InitialState';
import { loadPlanets } from './Actions/planetActions';
import { loadVehicles } from './Actions/vehicleActions';
const store = createStore <GameReducer> (reducers, initialAppState, applyMiddleware(thunk) );
store.dispatch(loadPlanets());
store.dispatch(loadVehicles());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
