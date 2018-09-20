import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comments from './components/feedback.jsx';
import App from './home.jsx';
import Navigation from './components/Navigation.js';
import EventPage from './components/eventpage.jsx';
// import Nav from './components/nav.js';

class Main extends Component {


 render() {


   return (
     <BrowserRouter>
     <div>

      <Navigation />

  <Switch>


  <Route exact path='/' component={App} />
  <Route path='/contact' component={Comments} />
  <Route path='/event' component={EventPage} />
</Switch>
  </div>
</BrowserRouter>
   );
 }
}

export default Main;
