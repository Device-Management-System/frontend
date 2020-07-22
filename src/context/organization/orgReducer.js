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

export default (state, action) => {
  switch (action.type) {
    case CREATE_ORG_START:
    case GET_USERS_START:
    case GET_DEVICES_START:
      return {
        ...state,
        organizaton: null,
        users: null,
        devices: null,
        requestOn: true,
        isOrg: false,
        error: null,
      };
    case CREATE_ORG_SUCCESS:
      return {
        ...state,
        organizaton: action.payload,
        users: null,
        devices: null,
        requestOn: false,
        isOrg: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        requestOn: false,
        error: null,
      };
    case GET_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload,
        requestOn: false,
        error: null,
      };
    case CREATE_ORG_FAIL:
      return {
        ...state,
        organizaton: null,
        users: null,
        devices: null,
        isOrg: false,
        requestOn: false,
        error: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        users: null,
        requestOn: false,
        error: action.payload,
      };
    case GET_DEVICES_FAIL:
      return {
        ...state,
        devices: null,
        requestOn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
