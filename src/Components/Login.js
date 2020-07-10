import React from 'react';
import axios from 'axios';
import { firebase } from '../Helpers/index.js';
const firebaseUser = require('firebase/app');
require('firebase/auth');

function AuthCallback(props) {
  firebaseUser.auth().onAuthStateChanged(async (user) => {
    // User is signed in.
    if (user) {
      let token = await user.getIdToken();
      // localStorage.setItem('token', token);
      axios
        .post(`${process.env.REACT_APP_API}`, {
          token: token,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', token);
        })
        .catch((err) => {
          console.log(err);
          // window.alert('There was an error singing in');
        });
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
