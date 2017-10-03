import {
  FETCH_COMMUNITIES, 
  LIST_COMMUNITIES,
  GET_COMMUNITY,
  FETCH_COMMUNITIES_ERROR
} from '../actions/CommunitiesActions';

const defaultState = {
  error: false,
  errorMessage: null,
  loading: false,
  communties: []
};

const CommunitiesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_COMMUNITIES:
      return { ...state, loading: true };

    case LIST_COMMUNITIES:
      return Object.assign({}, state, { communities: action.communities, loading: false });

    case GET_COMMUNITY:
      return state.communities.filter((community) => community.id === action.communityId)[0]

    case FETCH_COMMUNITIES_ERROR:
      return Object.assign({}, state, { error: true, errorMessage: action.error });

    default:
      return state;
  }
};

export default Communities;