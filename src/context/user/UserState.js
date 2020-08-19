import React, { useReducer, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import UserContext from './userContext';
import userReducer from './userReducer';

import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SELECT_USER_START,
  SELECT_USER_SUCCESS,
  SELECT_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAIL,
} from '../types';

const UserState = ({ children }) => {
  const initialState = {
    users: null,
    selectedUser: null,
    requestOn: null,
    userCreated: null,
    error: null,
    userUpdated: null,
    userRemoved: null,
  };

  const authContext = useContext(AuthContext);
  const { authAxios } = authContext;

  const [state, dispatch] = useReducer(userReducer, initialState);
  const { user, requestOn, userCreated, error } = state;

  // Create user
  const createUser = async (formData) => {
    dispatch({ type: CREATE_USER_START });

    try {
      // Firebase sends email authentication to user with automatic verification.

      const { data } = await axiosWithAuth().post(`/api/users`, formData);
      dispatch({ type: CREATE_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: CREATE_USER_FAIL, payload: message });
    }
  };

  // Get all users
  const getUsers = async () => {
    dispatch({ type: GET_USERS_START });

    try {
      const { data } = await authAxios().get(`/api/users`);
      dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: GET_USERS_FAIL, paypload: message });
    }
  };

  // Get a single user
  const selectUser = async (id) => {
    dispatch({ type: SELECT_USER_START });

    try {
      const { data } = await authAxios().get(`/api/users/${id}`);
      dispatch({ type: SELECT_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: SELECT_USER_FAIL, paypload: message });
    }
  };

  // Update a user
  const updateUser = async (user) => {
    dispatch({ type: UPDATE_USER_START });

    try {
      const { data } = authAxios().put(`api/users/${user.id}`, user);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: UPDATE_USER_FAIL, payload: message });
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    dispatch({ type: REMOVE_USER_START });

    try {
      const { data } = await authAxios().delete(`/api/users/${id}`);
      dispatch({ type: REMOVE_USER_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: REMOVE_USER_FAIL, payload: message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        requestOn,
        userCreated,
        error,
        createUser,
        getUsers,
        selectUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
