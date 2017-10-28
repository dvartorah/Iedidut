export const Types = {
  FETCH_COMMUNITIES: 'FETCH_COMMUNITIES',
  SET_COMMUNITIES: 'SET_COMMUNITIES',
  COMMUNITIES_FETCH_ERROR: 'COMMUNITIES_FETCH_ERROR'
};

const setCommunities = (communities) => {
  return {
    type: Types.SET_COMMUNITIES,
    payload: {
      communities
    }
  }
};

const communitiesFetchError = (error) => {
  return {
    type: Types.COMMUNITIES_FETCH_ERROR,
    payload: {
      error: error.message
    }
  }
};

export const fetchCommunities = (within = {}) => {
  return dispatch => {
    
  };
};