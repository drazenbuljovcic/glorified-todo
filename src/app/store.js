import { applyMiddleware, compose, createStore  } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/reducer';

let reduxCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

export default function configStore(initialState = {
  env: process.env.env,
  user: {
    userLoggedIn: true,
    userFirstName: 'Nebojsa'
  },
  route: '',
  text: 'Redux works!'
  }) {
  return reduxCreateStore(reducer, initialState);
}