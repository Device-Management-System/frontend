import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        users: [],
        isFetching: true,
        isLoading: false,
        selectedUser: null,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
        isLoading: false,
        selectedUser: null,
        error: null,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        users: [],
        isFetching: false,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
        isLoading: false,
        selectedUser: null,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        selectedUser: action.payload,
        error: null,
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        selectedUser: null,
        error: action.payload,
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        isLoading: false,
        error: null,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        error: action.payload,
      };
    case REMOVE_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        isLoading: false,
        error: null,
      };
    case REMOVE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
