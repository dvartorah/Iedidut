import {
  Types
} from '../actions/Geolocation';

const defaultState = {
  loading: true,
  errors: [],
  lastKnownPosition: {}
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
          latitude: action.payload.coordinates.latitude,
          longitude: action.payload.coordinates.longitude
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