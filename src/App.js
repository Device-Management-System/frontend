import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { AuthState } from './context/auth/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/navigation/Navigation';
import Homepage from './pages/homepage/Homepage';
import Register from './components/authComponents/register/Register';
import Login from './components/authComponents/login/Login';
import ManagerDashboard from './pages/ManagerDashboard';

import { config } from './utils/auth0Config';
import { initializeAnalytics } from './utils/analytics';
import './App.css';

library.add(fab, fas, faCheckSquare, faCoffee);

function App() {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }
  return (
    <Auth0Provider {...config}>
      <AuthState>
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
          </Switch>
        </div>
      </AuthState>
    </Auth0Provider>
  );
}

export default App;
