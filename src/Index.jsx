// react libraries
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// components
import Routes from './Routes';

// others
import store from './store';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
