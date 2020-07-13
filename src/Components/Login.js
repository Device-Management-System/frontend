import React from 'react';
// import axios from 'axios';
import { firebase } from '../Helpers/index.js';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../auth/axiosWithAuth';
const firebaseUser = require('firebase/app');
require('firebase/auth');

function AuthCallback(props) {
  let history = useHistory();
  firebaseUser.auth().onAuthStateChanged(async (user) => {
    // User is signed in.
    if (user) {
      let token = await user.getIdToken();
      localStorage.setItem('token', token);
      axiosWithAuth()
        .post(`${process.env.REACT_APP_API}/api/auth`, {
          token: token,
        })
        .then((res) => {
          console.log(res);
          history.push('/manager-dashboard');
        })
        .catch((err) => {
          console.log(err);
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
