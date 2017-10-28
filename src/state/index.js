import Communities from './reducers/Communities';
import Geolocation from './reducers/Geolocation';

import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  communities: Communities,
  geolocation: Geolocation
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;