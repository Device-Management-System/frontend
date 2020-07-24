import React from 'react';
import ReactGA from 'react-ga';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import PrivateRoute from './components/PrivateRoute';
import AuthState from './context/auth/AuthState';
import OrgState from './context/organization/OrgState';
import Navigation from './components/navigation/Navigation';
import Homepage from './views/homepage/Homepage';
import Register from './components/authComponents/register/Register';
import Login from './components/authComponents/login/Login';
import ManagerDashboard from './views/ManagerDashboard';
import VerifyEmail from './views/verifyEmail/VerifyEmail';

import './App.css';

library.add(fab, fas, faCheckSquare, faCoffee);

function initializeAnalytics() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview('/homepage');
}

function App() {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }

  return (
    <AuthState>
      <OrgState>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute
              path="/manager-dashboard"
              component={ManagerDashboard}
            />
            <PrivateRoute
              path="/organization/create"
              component={ManagerDashboard}
            />
            <PrivateRoute path="/verify-email" component={VerifyEmail} />
          </Switch>
        </div>
      </OrgState>
    </AuthState>
  );
}

export default App;
