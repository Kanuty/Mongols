import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {FourZeroFour} from './pages/FourZeroFour';
import {TestingViev} from './pages/TestingViev';

import './App.scss';

export const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="appContainer">
          <Switch>
            <Route exact path="/TestingViev" component={TestingViev}></Route>
            <Route component={FourZeroFour}></Route>
            <Route component={TestingViev}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}


