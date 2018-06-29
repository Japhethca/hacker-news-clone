import axios from 'axios';

import apiURL from 'configs/api';
import {
  FETCH_ITEMS,
  PAGINATION,
  NETWORK_STATUS
} from '../types';

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

export const netWorkStatus = status => ({
  type: NETWORK_STATUS,
  offline: status
});

export default (itemType, limit = 15) => dispatch => axios.get(`${apiURL}/${itemType}.json`)
  .then((response) => {
    const { data } = response;
    const totalPages = Math.ceil(data.length / limit);
    dispatch(paginate(totalPages, itemType));
    dispatch(fetchItems(data, itemType));
  })
  .catch((error) => {
    if (error.message === 'Network Error') {
      dispatch(netWorkStatus(true));
    }
  });
