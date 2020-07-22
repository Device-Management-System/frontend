import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import OrgContext from './orgContext';
import orgReducer from './orgReducer';

import {
  CREATE_ORG_START,
  CREATE_ORG_SUCCESS,
  CREATE_ORG_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_DEVICES_START,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
} from '../types';

const OrgState = (props) => {
  const initialState = {
    organization: null,
    error: null,
    users: null,
    devices: null,
    requestOn: false,
    isOrg: false,
  };

  const [state, dispatch] = useReducer(orgReducer, initialState);
  const { organization, error, users, devices } = state;

  // Create an organization
  const createOrg = async (formData) => {
    dispatch({ type: CREATE_ORG_START });
    try {
      const { data } = await axiosWithAuth().post(
        `${process.env.REACT_APP_API}/api/organization`,
        formData
      );

      dispatch({ type: CREATE_ORG_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: CREATE_ORG_FAIL, payload: message });
    }
  };

  // Get organization's users
  const getUsers = async (id) => {
    dispatch({ type: GET_USERS_START });
    try {
      const { data } = await axiosWithAuth().get(
        `${process.env.REACT_APP_API}/api/organization/${id}/users`
      );
      dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

  // Get organization's devices
  const getDevices = async (id) => {
    dispatch({ type: GET_DEVICES_START });

    try {
      const { data } = await axiosWithAuth().get(
        `${process.env.REACT_APP_API}/api/organiztion/${id}/devices`
      );
      dispatch({ type: GET_DEVICES_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: GET_DEVICES_FAIL, payload: message });
    }
  };

  return (
    <OrgContext.Provider
      value={{
        organization,
        error,
        users,
        devices,
        createOrg,
        getUsers,
        getDevices,
      }}
    >
      {props.children}
    </OrgContext.Provider>
  );
};

export default OrgState;
