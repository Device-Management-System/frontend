import React from 'react';
import logo from './logo.svg';
import ReactGA from 'react-ga';
import './App.css';

function initializeAnalytics() {
  ReactGA.initialize('UA-172172642-1');
  ReactGA.pageview('/homepage');
}

function App() {
  if (process.env.NODE_ENV === 'production') {
    initializeAnalytics;
  }
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
