import React, { useEffect } from 'react';
import logo from './logo.svg';
import ReactGA from 'react-ga';
import { axiosWithAuth } from './auth/axiosWithAuth';
import './App.css';

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
      .get('/api/users/')
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
