import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument()),
    window.devToolsExtension && process.env.NODE_ENV === 'development' ?
      window.devToolsExtension() : f => f
  )
);

export default store;
