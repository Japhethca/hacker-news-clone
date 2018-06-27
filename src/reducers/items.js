import {
  FETCH_ITEMS,
  FETCH_SINGLE_ITEM,
  ISLOADING,
  PAGINATION,
} from '../types';

import initialState from './initialState';

export const storiesByTypeReducer = (state = initialState.storyTypes, action) => {
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

export const itemsReducer = (state = initialState.items, action) => {
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

export const itemLoaderReducer = (state = initialState.loader, action) => {
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

export const paginationReducer = (state = initialState.pagination, action) => {
  switch (action.type) {
    case PAGINATION:
      return {
        ...state,
        [action.itemType]: action.totalPages
      };
    default:
      return state;
  }
};
