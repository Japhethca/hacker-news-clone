import axios from 'axios';

import { FETCH_SINGLE_ITEM } from '../types';
import apiURL from 'configs/api';

const fetchItem = (item) => ({
  type: FETCH_SINGLE_ITEM,
  item
});

export const handleFetchItem = (itemID) => {
  return dispatch => axios.get(`${apiURL}/item/${itemID}.json`)
    .then(response => {
      dispatch(fetchItem(response.data));
    })
    .catch(error => console.log(error));
};
