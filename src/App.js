import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { AuthState } from './context/auth/AuthContext';
import { DeviceState } from './context/device/DeviceContext';
import Approutes from './components/routing/Approutes';
import { config } from './utils/auth0Config';
import { initializeAnalytics } from './utils/analytics';
import { theme } from './theme';

import './App.css';

library.add(fab, fas, faCheckSquare, faCoffee);

function App() {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }
  return (
    <Auth0Provider {...config}>
      <ThemeProvider theme={theme}>
        <Router>
          <AuthState>
            <DeviceState>
              <Approutes />
            </DeviceState>
          </AuthState>
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
