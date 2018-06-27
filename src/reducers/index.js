import { combineReducers } from 'redux';
import {
  storiesByTypeReducer,
  itemsReducer,
  itemLoaderReducer,
  paginationReducer
} from './items';

export default combineReducers({
  storyTypes: storiesByTypeReducer,
  items: itemsReducer,
  loader: itemLoaderReducer,
  pagination: paginationReducer
});
