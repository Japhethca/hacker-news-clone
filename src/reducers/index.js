import { combineReducers } from 'redux';
import { topStoriesByIdReducer, itemsReducer } from './items';

export default combineReducers({
    storyTypes: topStoriesByIdReducer,
    items: itemsReducer
});
