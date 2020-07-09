import React from 'react';
import logo from './logo.svg';
import ReactGA from 'react-ga';
import './App.css';
import Login from './Components/Login';

function initializeAnalytics() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview('/homepage');
}

function App() {
  if (process.env.REACT_APP_ENV === 'production') {
    initializeAnalytics();
  }
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
