import React, { useReducer } from 'react';

import UserContext from './userContext';
import userReducer from './userReducer';
import { SET_CURRENT_USER_SUCCESS, SET_CURRENT_USER_FAIL } from '../types';
const firebase = require('firebase/app');
const { auth } = firebase;

const UserState = (props) => {
  const initialState = {
    currentUser: null,
    isAuthenticated: null,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);
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

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        error,
        getUserState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
