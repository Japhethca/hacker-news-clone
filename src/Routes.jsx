// react libraries
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// components
import Home from 'pages/Home';

export default () => (
  <Router>
    <Route component={Home} />
  </Router>
);
