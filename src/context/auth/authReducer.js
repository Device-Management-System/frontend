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
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        currentUser: null,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        isAuthenticated: false,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
        isAuthenticated: false,
        token: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
