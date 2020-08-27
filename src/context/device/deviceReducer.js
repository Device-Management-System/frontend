import {
  CREATE_DEVICE_START,
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_FAIL,
  GET_DEVICES_START,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
  // FETCH_DEVICE_START,
  // FETCH_DEVICE_SUCCESS,
  // FETCH_DEVICE_FAIL,
  // UPDATE_DEVICE_START,
  // UPDATE_DEVICE_SUCCESS,
  // UPDATE_DEVICE_FAIL,
  // REMOVE_DEVICE_START,
  // REMOVE_DEVICE_SUCCESS,
  // REMOVE_DEVICE_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_DEVICE_START:
      return {
        ...state,
        devices: null,
        currentDevice: null,
        isFetching: false,
        isCreated: false,
        isLoading: true,
        error: null,
      };
    case CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        devices: null,
        currentDevice: action.payload,
        isFetching: false,
        isCreated: true,
        isLoading: false,
        error: null,
      };
    case CREATE_DEVICE_FAIL:
    case GET_DEVICES_FAIL:
      return {
        ...state,
        devices: null,
        currentDevice: null,
        isFetching: false,
        isCreated: false,
        isLoading: false,
        error: action.payload,
      };
    case GET_DEVICES_START:
      return {
        ...state,
        isFetching: true,
        isCreated: false,
        isLoading: true,
        error: null,
      };
    case GET_DEVICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isCreated: false,
        isLoading: false,
        devices: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
