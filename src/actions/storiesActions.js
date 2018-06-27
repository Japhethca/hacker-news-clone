import axios from 'axios';

import apiURL from 'configs/api';
import { FETCH_ITEMS } from '../types';

const fetchItems = (items, itemType) => ({
  type: FETCH_ITEMS,
  items,
  itemType
});

export default itemType => dispatch => axios.get(`${apiURL}/${itemType}.json`,
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then((response) => {
    dispatch(fetchItems(response.data, itemType));
  });
