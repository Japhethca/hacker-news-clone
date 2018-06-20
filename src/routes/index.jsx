// react libraries
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Home from 'pages/Home';

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/home" component={Home}/>
    </Switch>
  </Router>
)
