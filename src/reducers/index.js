import { combineReducers } from 'redux';
import { storiesByTypeReducer, itemsReducer } from './items';

export default combineReducers({
  storyTypes: storiesByTypeReducer,
  items: itemsReducer
});
