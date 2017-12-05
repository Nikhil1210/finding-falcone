import * as React from 'react';
import './App.css';
import Header from './components/Header';
import FindFalcone from './components/FindFalcon';
import Result from './components/Result';
import { Switch, Route } from 'react-router-dom';
import AppFooter from './components/AppFooter';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <Header />
      <h2>Finding Falcone!</h2>
      <main>
        <Switch>
          <Route exact path="/" component={FindFalcone}/>
          <Route path="/result" component={Result}/>
        </Switch>
      </main>
      <AppFooter/>
    </div>
    );
  }
}

export default App;
