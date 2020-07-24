import {
  CREATE_ORG_START,
  CREATE_ORG_SUCCESS,
  CREATE_ORG_FAIL,
  GET_ORG_START,
  GET_ORG_SUCCESS,
  GET_ORG_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_ORG_START:
    case GET_ORG_START:
      return {
        ...state,
        organizaton: null,
        users: null,
        devices: null,
        requestOn: true,
        orgCreated: false,
        error: null,
      };
    case CREATE_ORG_SUCCESS:
      return {
        ...state,
        orgCreated: true,
        requestOn: false,
        error: null,
      };
    case GET_ORG_SUCCESS:
      return {
        ...state,
        organizaton: action.payload,
      };
    case CREATE_ORG_FAIL:
    case GET_ORG_FAIL:
      return {
        ...state,
        organizaton: null,
        orgCreated: false,
        requestOn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
