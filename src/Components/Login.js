import React from 'react';

import { firebase } from '../Helpers/index.js';
const firebaseUser = require('firebase/app');
require('firebase/auth');

function AuthCallback(props) {
  firebaseUser.auth().onAuthStateChanged(async (user) => {
    // User is signed in.
    if (user) {
      let token = await user.getIdToken();
      localStorage.setItem('token', token);
    }
  });
}

const Login = () => {
  firebase();
  AuthCallback();
  return (
    <div className="App">
      <header className="App-header">
        <div id="firebaseui-auth-container"></div>
      </header>
    </div>
  );
};

export default Login;
