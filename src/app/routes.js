import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Page from './Page';

import Main from './components/modules/Main';

import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';

function requireAuth(nextState, replaceState) {
  replaceState('/signin')
}

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Dashboard} onEnter={requireAuth} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Route>
)
export default routes;