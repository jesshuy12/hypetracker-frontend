import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/' render={() => <LandingPage/>} />
      </Switch>
    );
  }

}

export default withRouter(App);
