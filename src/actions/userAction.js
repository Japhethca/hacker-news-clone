import axios from 'axios';

import apiURL from 'configs/api';
import { FETCH_USER_DETAIL } from '../types';

const userAction = user => ({
  type: FETCH_USER_DETAIL,
  user
});

export default username => dispatch => axios.get(`${apiURL}/user/${username}.json`)
  .then((response) => {
    dispatch(userAction(response.data));
  });
