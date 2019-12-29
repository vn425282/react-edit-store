import { GET_STORE_INFO_STARTED, GET_STORE_INFO_SUCCESS, GET_STORE_INFO_FAILED,
  UPDATE_STORE_INFO_STARTED, UPDATE_STORE_INFO_SUCCESS, UPDATE_STORE_INFO_FAILED } from '../actions/information.action';

let initialState = {
  store: null
}

const informationReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_INFO_STARTED:
      return {
        ...state,
        loading: true
      }
    case GET_STORE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        store: action.payload
      };
    case GET_STORE_INFO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case UPDATE_STORE_INFO_STARTED:
      return {
        ...state,
        updateLoading: true
      }
    case UPDATE_STORE_INFO_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        updateError: null,
        store: action.payload
      };
    case UPDATE_STORE_INFO_FAILED:
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload.error
      };
    default:
      return state
  }
}

export default informationReducers;