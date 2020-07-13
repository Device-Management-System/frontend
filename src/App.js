import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { axiosWithAuth } from './auth/axiosWithAuth';
import './App.css';
import PrivateRoute from './Components/PrivateRoute';
import Auth from './Views/Auth';
import { Route } from 'react-router-dom';
import ManagerDashboard from './Views/ManagerDashboard';

function initializeAnalytics() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview('/homepage');
}

function App() {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_API}/api/users/`)
      .then((res) => {
        console.log('BACKEND RES IS => ', res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>welcome</p>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/manager-dashboard" component={ManagerDashboard} />
      </header>
    </div>
  );
}

export default App;
