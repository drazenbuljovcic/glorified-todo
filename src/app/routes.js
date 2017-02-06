import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Page from './Page';

import Main from './components/modules/Main';

// Auth routes
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';

// User routes
import Dashboard from './components/pages/Dashboard';
import MyWeek from './components/pages/MyWeek';
import Deadlines from './components/pages/Deadlines';
import Grades from './components/pages/Grades';
import Notes from './components/pages/Notes';

import NotFound from './components/pages/NotFound';

// function requireAuth(nextState, replaceState) {
//   replaceState('/auth')
// }

const redirectToAuthIndex = (nextState, replaceState) => {
  replaceState('/auth/signin');
}

const redirectToUserIndex = (nextState, replaceState) => {
  replaceState('/user/dashboard');
}

const routes = (
  <Route path="/" component={Page} >
    <IndexRoute onEnter={redirectToUserIndex} />
    <Route path="user">
      <IndexRoute onEnter={redirectToUserIndex} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="week" component={MyWeek} />
      <Route path="deadlines" component={Deadlines} />
      <Route path="grades" component={Grades} />
      <Route path="notes" component={Notes} />
    </Route>
    <Route path="auth">
      <IndexRoute onEnter={redirectToAuthIndex} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)
export default routes;