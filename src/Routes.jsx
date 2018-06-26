// react libraries
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Home from 'pages/Home/Home.component';
import NavigationBar from 'components/NavigationBar/NavigationBar.component';

export default () => (
  <Router>
    <Route component={Home}/>
  </Router>
)
