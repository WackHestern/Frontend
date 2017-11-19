import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/Home/home';
import SignUp from './components/views/SignUp/signUp'
import SignIn from './components/views/SignIn/signIn'
import Fund from './components/views/Fund/fund'
import Portfolio from './components/views/Portfolio/Portfolio'
import Trade from './components/views/Trade/Trade'
import Admin from './components/views/Admin/Admin'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='signup' component={SignUp} />
    <Route path='signin' component={SignIn} />
    <Route path='charge' component={Fund} />
    <Route path='app.portfolio' component={Portfolio} />
    <Route path='app.trade' component={Trade} />
    <Route path='admin' component={Admin} />
    <Route path='*' component={Home} />
  </Route>
);