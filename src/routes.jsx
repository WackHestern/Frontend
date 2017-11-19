import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/Home/home';
import SignUp from './components/views/SignUp/signup'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='signup' component={SignUp} />
    <Route path='*' component={Home} />
  </Route>
);