// react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles
import './Home.scss';

// components
import StoryView from 'components/StoryView/StoryView.component';
import NavigationBar from 'components/NavigationBar/NavigationBar.component';
import Footer from 'components/Footer/Footer.component';
import Stories from 'pages/Stories/Stories.component';


export default () => {
  return (
    <div>
      <NavigationBar />
      < div className = "container home--bg-color" >
        <Switch>
          <Route path="/new" component={Stories}/>
          <Route path="/top" component={Stories}/>
          <Route path="/ask" component={Stories}/>
          <Route path="/show" component={Stories}/>
          {/* <Route path="/comments" component={Stories}/> */}
          <Route path="/jobs" component={Stories}/>
          <Route path="/item/:itemId" component={StoryView}/>
        </Switch>
        <Footer />
      </div>
    </div>
  )
};
