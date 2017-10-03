import CommunitiesReducer from './reducers/CommunitiesReducer';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers(
  CommunitiesReducer
);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;