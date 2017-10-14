import CommunitiesReducer from './CommunitiesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  communities: CommunitiesReducer
});