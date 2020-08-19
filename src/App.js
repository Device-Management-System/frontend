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
import Navigation from './components/navigation/Navigation';
import Approutes from './components/routing/Approutes';

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
        <Approutes />
      </AuthState>
    </Auth0Provider>
  );
}

export default App;
