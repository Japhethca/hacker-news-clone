import { combineReducers } from 'redux';
import {
  storiesByTypeReducer,
  itemsReducer,
  itemLoaderReducer,
  paginationReducer
} from './items';
import usersReducer from './users';

export default combineReducers({
  storyTypes: storiesByTypeReducer,
  items: itemsReducer,
  loader: itemLoaderReducer,
  pagination: paginationReducer,
  users: usersReducer
});
