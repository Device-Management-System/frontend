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

export default (state, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        requestOn: true,
        userCreated: false,
        error: null,
      };
    case GET_USERS_START:
      return {
        ...state,
        requestOn: true,
        users: null,
        selectedUser: null,
        userCreated: null,
        error: null,
      };
    case SELECT_USER_START:
      return {
        ...state,
        requestOn: true,
        selectedUser: null,
        error: null,
      };
    case UPDATE_USER_START:
      return {
        ...state,
        requestOn: true,
        userUpdated: false,
        error: null,
      };
    case REMOVE_USER_START:
      return {
        ...state,
        requestOn: true,
        userRemoved: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        requestOn: false,
        userCreated: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        requestOn: false,
        error: null,
      };
    case SELECT_USER_SUCCESS:
      return {
        ...state,
        requestOn: false,
        selectedUser: action.payload,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        requestOn: false,
        userUpdated: true,
        error: null,
      };
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        requestOn: false,
        userRemoved: true,
        error: null,
      };
    case CREATE_USER_FAIL:
    case SELECT_USER_FAIL:
    case UPDATE_USER_FAIL:
    case REMOVE_USER_FAIL:
      return {
        ...state,
        requestOn: false,
        userCreated: false,
        userUpdated: false,
        userRemoved: false,
        selectedUser: null,
        error: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        users: null,
        requestOn: false,
        userCreated: false,
        userUpdated: false,
        userRemoved: false,
        selectedUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
