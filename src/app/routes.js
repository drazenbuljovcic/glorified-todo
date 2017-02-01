import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './Page';

import Main from './components/Main';
import Signup from './components/Signup';
import Signin from './components/Signin';

import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Signin}/>
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Route>
)
export default routes;