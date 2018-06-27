import {
  FETCH_ITEMS,
  FETCH_SINGLE_ITEM,
  ISLOADING
} from '../types';

export const storiesByTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        [action.itemType]: [...action.items]
      };

    default:
      return state;
  }
};

export const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ITEM:
      return {
        ...state,
        [action.item.id]: action.item
      };

    default:
      return state;
  }
};

export const itemLoaderReducer = (state = {}, action) => {
  switch (action.type) {
    case ISLOADING:
      return {
        ...state,
        [action.itemId]: action.status
      };

    default:
      return state;
  }
};
