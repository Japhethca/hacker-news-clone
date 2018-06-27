// react libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// styles
import './Home.scss';

// components
import StoryView from 'components/StoryView';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import Stories from 'pages/Stories';

type Props = {
  location: any
}
export default ({ location: { pathname } }: Props) => {
  if (pathname === '/') {
    return <Redirect to="top" />;
  }

  return (
    <div>
      <NavigationBar />
      <div className="container home--bg-color">
        <Switch>
          <Route path="/new" component={Stories} />
          <Route path="/top" component={Stories} />
          <Route path="/ask" component={Stories} />
          <Route path="/show" component={Stories} />
          {/* <Route path="/comments" component={Stories}/> */}
          <Route path="/jobs" component={Stories} />
          <Route path="/item/:itemId" component={StoryView} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};
