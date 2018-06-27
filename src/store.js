import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import initialState from 'reducers/initialState';


const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument()),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension() : f => f
  )
);

export default store;
