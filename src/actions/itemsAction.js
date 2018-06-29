import axios from 'axios';

import apiURL from 'configs/api';
import { FETCH_SINGLE_ITEM, ISLOADING } from '../types';
import { netWorkStatus } from './storiesActions';

const fetchItem = item => ({
  type: FETCH_SINGLE_ITEM,
  item
});

const isLoading = (itemId, status = false) => ({
  type: ISLOADING,
  itemId,
  status
});

export default itemID => (dispatch) => {
  dispatch(isLoading(itemID, true));
  axios.get(`${apiURL}/item/${itemID}.json`)
    .then((response) => {
      dispatch(isLoading(itemID));
      dispatch(fetchItem(response.data));
    })
    .catch((error) => {
      if (error.message === 'Network Error') {
        dispatch(netWorkStatus(true));
      }
      dispatch(isLoading(itemID));
    });
};
