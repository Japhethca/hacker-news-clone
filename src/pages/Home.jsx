// react libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// styles
import './Home.scss';

// components
import ItemView from 'components/Items/ItemView';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import UserDetail from 'components/UserDetail';
import Stories from './Stories';
import NotFound from './NotFound';
import { ThemeProvider } from '../common/themeContext';

type Props = {
  location: {
    pathname: string
  }
}

export const Home = ({ location: { pathname } }: Props) => {
  if (pathname === '/') {
    return <Redirect to="top" />;
  }

  return (
    <ThemeProvider>
      <NavigationBar />
      <div className="container home--bg-color" id="top">
        <Switch>
          <Route path="/new" component={Stories} />
          <Route path="/top" component={Stories} />
          <Route path="/ask" component={Stories} />
          <Route path="/show" component={Stories} />
          <Route path="/jobs" component={Stories} />
          <Route path="/item/:itemId" component={ItemView} />
          <Route path="/user/:username" component={UserDetail} />
          <Route path="/*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
};


export default Home;
