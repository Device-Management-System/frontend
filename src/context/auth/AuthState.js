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

import { auth } from '../../helpers/firebase';

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

  // Set currentUser in state
  const getUserState = async () => {
    try {
      if (localStorage.getItem('token')) {
        await auth.onAuthStateChanged((user) => {
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

  // Register new user
  const register = async (user) => {
    dispatch({ type: REGISTER_START });

    try {
      await auth.createUserWithEmailAndPassword(user.email, user.password);

      await auth.currentUser.updateProfile({
        displayName: user.name,
      });

      localStorage.setItem('token', await auth.currentUser.getIdToken());

      console.log(auth.currentUser.getIdToken());

      const res = await axiosWithAuth().post(
        `${process.env.REACT_APP_API}/api/auth`,
        { name: auth.currentUser.displayName }
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.config.headers.Authorization,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }

    await getUserState();
  };

  // Log returning user
  const login = async (user) => {
    dispatch({ type: LOGIN_START });

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);

      localStorage.setItem(
        'token',
        await JSON.stringify(auth.currentUser.getIdToken())
      );

      console.log(auth.currentUser.getIdToken());

      const res = await axiosWithAuth().post(
        `${process.env.REACT_APP_API}/api/auth`
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.config.headers.Authorization,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }

    getUserState();
  };

  // logout user
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        dispatch({ type: LOGOUT });
      })
      .catch((err) => console.log(err));
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
