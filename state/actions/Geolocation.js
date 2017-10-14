export const Types = {
  UPDATE_CURRENT_LOCATION: 'UPDATE_CURRENT_LOCATION',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  GET_CURRENT_LOCATION: 'GET_CURRENT_LOCATION',
  LOCATION_REQUEST_ERROR: 'LOCATION_REQUEST_ERROR'
};

const setCurrentLocation = (coordinates) => {
  return {
    type: Types.SET_CURRENT_LOCATION,
    payload: {
      coordinates
    }
  };
};

const locationRequestError = (errors) => {
  return {
    type: Types.LOCATION_REQUEST_ERROR,
    payload: {
      errors
    }
  };
};

export const updateCurrentPosition = () => {
  return dispatch => {
    dispatch({ type: Types.UPDATE_CURRENT_LOCATION });

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { dispatch(setCurrentLocation(coords)) },
      (error) => { locationRequestError(error) }
    );
  }
};