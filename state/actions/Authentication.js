export const AUTHENTICATION_REQUIRED = 'AUTHENTICATION_REQUIRED';
export const START_AUTHENTICATION    = 'TRY_AUTHENTICATION';
export const AUTHENTICATION_ERROR    = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_SUCCESS  = 'AUTHENTICATION_SUCCESS';

export const startAuthentication = (username, password) => {
  let requestParams = JSON.parse({ username, password });

  return dispatch => {
    fetch('')
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(authenticationSuccess(response));
      })

      .catch((error) => dispatch(error));
  };
};

export const authenticationRequired = (message) => {
  return {
    type: AUTHENTICATION_REQUIRED,
    message
  }
};

export const authenticationSuccess = (response) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    response
  };
};

export const authenticationError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    error
  }
};