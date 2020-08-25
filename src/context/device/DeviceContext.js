import React, { createContext, useReducer, useContext } from 'react';
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
} from './DeviceContext';

export const DeviceContext = createContext();

export const DeviceState = ({ children }) => {
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

  const [state, dispatch] = useReducer(deviceReducer, initialState);

  const {
    devices,
    currentDevice,
    isFetching,
    isCreated,
    isLoading,
    error,
  } = state;

  const createDevice = async (deviceData) => {
    dispatch({ type: CREATE_DEVICE_START });
    try {
      const newDevice = {
        ...deviceData,
        user_id,
      };

      const { data } = await authAxios.post('/api/devices', newDevice);

      dispatch({ type: CREATE_DEVICE_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: CREATE_DEVICE_FAIL, payload: message });
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
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
