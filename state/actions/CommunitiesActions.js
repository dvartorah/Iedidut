export const FETCH_COMMUNITIES       = 'FETCH_COMMUNITIES';
export const FETCH_COMMUNITIES_ERROR = 'FETCH_COMMUNITIES_ERROR';
export const LIST_COMMUNITIES        = 'LIST_COMMUNITIES';
export const GET_COMMUNITY           = 'GET_COMMUNITY';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const fetchCommunities = (filters = {}) => {
  return dispatch => {
    fetch('https://rest-dvar-torah.herokuapp.com/api/v1/communities', {
      headers: defaultHeaders
    })
    .then((response) => response.json())
    .then((communities) => {
      dispatch(listCommunities(communities));
    })

    .catch((error) => {
      dispatch(fetchCommunitiesError(error));
    });
  }
};

export const listCommunities = (communities) => {
  return {
    type: LIST_COMMUNITIES,
    communities
  }
};

export const getCommunity = (communityId) => {
  return {
    type: GET_COMMUNITY,
    communityId
  }
};

const fetchCommunitiesError = (error) => {
  return {
    type: FETCH_COMMUNITIES_ERROR,
    error
  }
};