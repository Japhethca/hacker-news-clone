import {
  FETCH_USER_DETAIL
} from '../types';

import initialState from './initialState';

export default (state = initialState.users, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL:
      return {
        [action.user.id]: action.user
      };

    default:
      return state;
  }
};
