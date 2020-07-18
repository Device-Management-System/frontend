import {
  SET_CURRENT_USER_SUCCESS,
  SET_CURRENT_USER_FAIL,
  LOGOUT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_SUCCESS:
      if (localStorage.getItem('firebaseui::rememberedAccounts')) {
        return {
          ...state,
          currentUser: action.payload,
          error: null,
          isAuthenticated: true,
        };
      } else {
        return {
          ...state,
          currentUser: null,
          error: null,
          isAuthenticated: false,
        };
      }
    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
