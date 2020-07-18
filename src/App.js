import React from 'react';
import ReactGA from 'react-ga';
import PrivateRoute from './Components/PrivateRoute';
import { Route } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import Auth from './Views/Auth';
import Navigation from './Components/Navigation/Navigation';
import Homepage from './Views/Homepage/Homepage';
import ManagerDashboard from './Views/ManagerDashboard';
import './App.css';

function initializeAnalytics() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview('/homepage');
}

function App(props) {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`${process.env.REACT_APP_API}api/users/`)
  //     .then((res) => {
  //       console.log('BACKEND RES IS => ', res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, []);

  return (
    <AuthState>
      <div className="App">
        <header className="App-header">
          <Navigation {...props} />
          <Route path="/" exact component={Homepage} />
          <Route path="/auth" exact component={Auth} />
          <PrivateRoute
            path="/manager-dashboard"
            component={ManagerDashboard}
          />
        </header>
      </div>
    </AuthState>
  );
}

export default App;
