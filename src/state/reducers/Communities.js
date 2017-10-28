import {
  GET_CURRENT_POSITION,
  SET_CURRENT_POSITION,
  GEOLOCATION_ERROR
} from '../actions/Communities';

const defaultState = {
  loading: false,
  error: false,
  errorMessage: '',
  currentLocation: {},
  communities: {}
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_CURRENT_POSITION:
      return { ...state, loading: true };

    case SET_CURRENT_POSITION:
      return { ...state, loading: false, error: false, currentLocation: action.payload.coords };

    case GEOLOCATION_ERROR:
      return { ...state, loading: false, error: true, errorMessage: action.payload.error.message }

    default:
      return state;
  }
};