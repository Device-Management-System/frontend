import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import OrgContext from './orgContext';
import orgReducer from './orgReducer';

import {
  CREATE_ORG_START,
  CREATE_ORG_SUCCESS,
  CREATE_ORG_FAIL,
  GET_ORG_START,
  GET_ORG_SUCCESS,
  GET_ORG_FAIL,
} from '../types';

const OrgState = (props) => {
  const initialState = {
    organization: null,
    error: null,
    requestOn: null,
    orgCreated: null,
  };

  const [state, dispatch] = useReducer(orgReducer, initialState);
  const { organization, error, users, devices } = state;

  // Create an organization
  const createOrg = async (formData) => {
    dispatch({ type: CREATE_ORG_START });
    try {
      const { data } = await axiosWithAuth().post(
        `/api/organization`,
        formData
      );

      dispatch({ type: CREATE_ORG_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: CREATE_ORG_FAIL, payload: message });
    }
  };

  // Get organization
  const getOrganization = async (id) => {
    dispatch({ type: GET_ORG_START });
    try {
      const { data } = await axiosWithAuth().get(`/api/organization/${id}`);
      dispatch({ type: GET_ORG_SUCCESS, payload: data });
    } catch ({ message }) {
      dispatch({ type: GET_ORG_FAIL, payload: message });
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
        getOrganization,
      }}
    >
      {props.children}
    </OrgContext.Provider>
  );
};

export default OrgState;
