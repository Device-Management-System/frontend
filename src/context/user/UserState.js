import React, { createContext, useReducer } from 'react';
import logger from 'use-reducer-logger';
import { AuthContext } from '../auth/AuthContext';
import userReducer from './userReducer';

import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAIL,
} from '../types';

export const UserContext = createContext();

export const UserState = ({ children }) => {
  const initialState = {
    users: [],
    isFetching: false,
    isLoading: false,
    selectedUser: null,
    error: null,
  };
  const authContext = useContext(AuthContext);
  const { authAxios } = authContext;

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development' ? logger(userReducer) : userReducer,
    initialState
  );

  const { users, isFetching, isLoading, selectedUser, error } = state;

  const getUsers = async () => {
    await dispatch({ type: GET_USERS_START });
    try {
      const { data } = await authAxios.get('/api/users');
      await dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

  const fetchUser = async (id) => {
    await dispatch({ type: FETCH_USER_START });
    try {
      const { data } = await authAxios.get(`/api/users/${id}`);
      await dispatch({ type: FETCH_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: FETCH_USER_FAIL, payload: message });
    }
  };

  const deleteUser = async (id) => {
    await dispatch({ type: REMOVE_USER_START });
    try {
      const { data } = await authAxios.delete(`/api/users/${id}`);
      await dispatch({ type: REMOVE_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: REMOVE_USER_FAIL, payload: message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isFetching,
        isLoading,
        selectedUser,
        error,
        getUsers,
        fetchUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
