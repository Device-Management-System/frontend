import React, { useReducer } from 'react';

import AuthContext from './authContext';
import authReducer from './authReducer';

import {
  SET_CURRENT_USER_SUCCESS,
  SET_CURRENT_USER_FAIL,
  LOGOUT,
} from '../types';

const firebase = require('firebase/app');
const { auth } = firebase;

const AuthState = (props) => {
  const initialState = {
    currentUser: null,
    isAuthenticated: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const { currentUser, isAuthenticated, error } = state;

  const getUserState = async () => {
    try {
      auth().onAuthStateChanged((user) =>
        dispatch({ type: SET_CURRENT_USER_SUCCESS, payload: user })
      );
    } catch (err) {
      dispatch({ type: SET_CURRENT_USER_FAIL, payload: err });
    }
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        dispatch({ type: LOGOUT }).catch((err) => console.log(err));
      });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        error,
        getUserState,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
