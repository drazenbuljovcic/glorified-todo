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
  minPix: 3,
  dayByHours: [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
    '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 PM',
    '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM'
  ],
  weekByDays: [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ],
  events: [ 
    {  
      eventId: 'sadgkagsdhl',
      eventHeadline: 'First ToDo',
      eventDesc: 'First Mock Todo For Testing',
      day: 'Mon',
      start: '08:00 AM',
      end: '09:00 AM',
      priority: 'high'
    }
  ]
}) {
  return reduxCreateStore(reducer, initialState);
}