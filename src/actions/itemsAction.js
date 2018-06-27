import axios from 'axios';

import apiURL from 'configs/api';
import { FETCH_SINGLE_ITEM } from '../types';

const fetchItem = item => ({
  type: FETCH_SINGLE_ITEM,
  item
});

export default itemID => dispatch => axios.get(`${apiURL}/item/${itemID}.json`)
  .then((response) => {
    dispatch(fetchItem(response.data));
  })
  .catch(error => console.log(error));
