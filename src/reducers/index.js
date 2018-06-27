import { combineReducers } from 'redux';
import {
  storiesByTypeReducer,
  itemsReducer,
  itemLoaderReducer
} from './items';

export default combineReducers({
  storyTypes: storiesByTypeReducer,
  items: itemsReducer,
  loader: itemLoaderReducer
});
