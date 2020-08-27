import React, { createContext, useReducer, useContext } from 'react';
import logger from 'use-reducer-logger';
// import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../auth/AuthContext';
import deviceReducer from './deviceReducer';

import {
  CREATE_DEVICE_START,
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_FAIL,
  GET_DEVICES_START,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
  FETCH_DEVICE_START,
  FETCH_DEVICE_SUCCESS,
  FETCH_DEVICE_FAIL,
  UPDATE_DEVICE_START,
  UPDATE_DEVICE_SUCCESS,
  UPDATE_DEVICE_FAIL,
  REMOVE_DEVICE_START,
  REMOVE_DEVICE_SUCCESS,
  REMOVE_DEVICE_FAIL,
} from '../types';

export const DeviceContext = createContext();

export const DeviceState = ({ children }) => {
  // const history = useHistory();
  const { user } = useAuth0();
  const user_id = user ? user.sub.slice(6) : null;
  const authContext = useContext(AuthContext);
  const { authAxios } = authContext;

  const initialState = {
    devices: [],
    currentDevice: null,
    isFetching: false,
    isCreated: false,
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development'
      ? logger(deviceReducer)
      : deviceReducer,
    initialState
  );

  const {
    devices,
    currentDevice,
    isFetching,
    isCreated,
    isLoading,
    error,
  } = state;

  const createDevice = async (deviceData) => {
    await dispatch({ type: CREATE_DEVICE_START });
    try {
      const newDevice = {
        ...deviceData,
        user_id,
      };

      const { data } = await authAxios.post('/api/devices', newDevice);

      await dispatch({ type: CREATE_DEVICE_SUCCESS, payload: data });
      // history.push('')
    } catch ({ message }) {
      await dispatch({ type: CREATE_DEVICE_FAIL, payload: message });
    }
  };

  const getDevices = async () => {
    await dispatch({ type: GET_DEVICES_START });
    try {
      const { data } = await authAxios.get('/api/devices');

      await dispatch({ type: GET_DEVICES_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: GET_DEVICES_FAIL, payload: message });
    }
  };

  const fetchDevice = async (id) => {
    await dispatch({ type: FETCH_DEVICE_START });
    try {
      const { data } = await authAxios.get(`/api/devices/${id}`);
      await dispatch({ type: FETCH_DEVICE_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: FETCH_DEVICE_FAIL, payload: message });
    }
  };

  const updateDevice = async (id, update) => {
    await dispatch({ type: UPDATE_DEVICE_START });

    try {
      const { data } = await authAxios.put(`/api/devices/${id}`, update);
      await dispatch({ type: UPDATE_DEVICE_SUCCESS, payload: data });
    } catch ({ message }) {
      await dispatch({ type: UPDATE_DEVICE_FAIL, payload: message });
    }
  };

  const deleteDevice = async (id) => {
    await dispatch({ type: REMOVE_DEVICE_START });

    try {
      const { data } = await authAxios.delete(`/api/devices/${id}`);
      dispatch({ type: REMOVE_DEVICE_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: REMOVE_DEVICE_FAIL, payload: message });
    }
  };

  return (
    <DeviceContext.Provider
      value={{
        devices,
        currentDevice,
        isFetching,
        isCreated,
        isLoading,
        error,
        createDevice,
        getDevices,
        fetchDevice,
        updateDevice,
        deleteDevice,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
