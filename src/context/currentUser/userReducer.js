import { SET_CURRENT_USER_SUCCESS, SET_CURRENT_USER_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isAuthenticated: true,
      };
    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
