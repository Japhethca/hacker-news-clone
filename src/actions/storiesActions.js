import axios from 'axios';

import { FETCH_ITEMS } from '../types';
import apiURL from 'configs/api';

const fetchItems = (items, itemType) => ({
  type: FETCH_ITEMS,
  items,
  itemType
});

export const handleFetchItems = (itemType) => {
  return dispatch => axios.get(`${apiURL}/${itemType}.json`, {
    headers: {
	  'Access-Control-Allow-Origin': '*',
	  },
  })
    .then((response) => {
      dispatch(fetchItems(response.data, itemType))
    })
};
