import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import initialState from 'reducers/initialState';
import { NETWORK_STATUS } from './types';

const networkMiddleware = store => next => (action) => {
  if (action.type === NETWORK_STATUS) {
    console.log('network error');
  }
  next(action);
};

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(), networkMiddleware),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension() : f => f
  )
);

export default store;
