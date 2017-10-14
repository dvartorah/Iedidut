import {
  Types
} from '../actions/Geolocation';

const defaultState = {
  loading: false,
  errors: [],
  lastKnownPosition: {
    coordinages: {}
  }
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case Types.UPDATE_CURRENT_LOCATION:
      return { ...state, loading: true };

    case Types.SET_CURRENT_LOCATION:
      return { 
        ...state,
        loading: false, 
        lastKnownPosition: {
          coordinages: action.payload.coordinages
        }
      };

    case Types.LOCATION_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
      
    default:
      return state;
  }
};