import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
  SET_CURRENT_USER_SUCCESS,
  SET_CURRENT_USER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const firebase = require('firebase/app');
const { auth } = firebase;

const AuthState = (props) => {
  const initialState = {
    currentUser: null,
    isAuthenticated: null,
    token: localStorage.getItem('token'),
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const { currentUser, isAuthenticated, token, loading, error } = state;

  // Register new user
  const register = async (name, email, password) => {
    dispatch({ type: REGISTER_START });

    try {
      await auth().createUserWithEmailAndPassword(email, password);

      const token = await auth().currentUser.getIdToken();
      localStorage.setItem('token', token);

      const res = await axiosWithAuth().post(
        `${process.env.REACT_APP_API_URL}api/auth`
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      return auth().currentUser.updateProfile({
        displayName: name,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

  // Log returning user
  const login = async (user) => {
    dispatch({ type: LOGIN_START });

    try {
      await auth().signInWithEmailAndPassword(user.email, user.password);

      const token = await auth().currentUser.getIdToken();
      localStorage.setItem('token', token);

      const res = await axiosWithAuth().get(
        `${process.env.REACT_APP_API_URL}api/auth`
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  };

  // Set currentUser in state
  const getUserState = async () => {
    try {
      if (localStorage.getItem('token')) {
        await auth().onAuthStateChanged((user) => {
          if (user) {
            return dispatch({
              type: SET_CURRENT_USER_SUCCESS,
              payload: user,
            });
          }
        });
      }
    } catch (err) {
      return dispatch({
        type: SET_CURRENT_USER_FAIL,
        payload: err,
      });
    }
  };

  // logout user
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        dispatch({ type: LOGOUT }).catch((err) => console.log(err));
      });
  };

  // Clears errors in state
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        token,
        loading,
        error,
        register,
        login,
        getUserState,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
