import axios from 'axios';

import apiURL from 'configs/api';
import { FETCH_ITEMS, PAGINATION } from '../types';

const fetchItems = (items, itemType) => ({
  type: FETCH_ITEMS,
  items,
  itemType
});

const paginate = (totalPages, itemType) => ({
  type: PAGINATION,
  totalPages,
  itemType
});

export default (itemType, limit = 15) => dispatch => axios.get(`${apiURL}/${itemType}.json`,
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then((response) => {
    const { data } = response;
    const totalPages = Math.ceil(data.length / limit);
    dispatch(paginate(totalPages, itemType));
    dispatch(fetchItems(data, itemType));
  });
