import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {FourZeroFour} from './pages/FourZeroFour';

import './App.scss';

export const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="appContainer">
          <Switch>
            {/* <Route exact path="/" component={}></Route> */}
            <Route component={FourZeroFour}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}


