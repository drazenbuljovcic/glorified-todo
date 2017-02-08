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
  minuteInPixels: 3,
  dayByHours: [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
    '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 PM',
    '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM'
  ],
  weekByDays: [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ],
  dayInMinutes: 1440,
  events: [
    {
      eventId: 'sadgkagsdhl',
      eventHeadline: 'First ToDo',
      eventDesc: 'First Mock Todo For Testing',
      day: 'Mon',
      fullStartTime: '08:00 AM',
      hour: '8',
      startInMin: 480,
      timeOfDay: 'AM',
      end: '09:00 AM',
      endInMin: 540,
      durationInMin: 60,
      priority: 'high'
    },
    {
      eventId: 'dghdrhjtj',
      eventHeadline: 'Second ToDo',
      eventDesc: 'Second Mock Todo For Testing',
      day: 'Tue',
      fullStartTime: '09:15 AM',
      hour: '9',
      startInMin: 555,
      timeOfDay: 'AM',
      end: '11:00 AM',
      endInMin: 660,
      durationInMin: 105,
      priority: 'medium'
    },
    {
      eventId: 'gdhmfj,k.',
      eventHeadline: 'Third ToDo',
      eventDesc: 'Third Mock Todo For Testing',
      day: 'Thu',
      fullStartTime: '12:00 AM',
      hour: '12',
      startInMin: 720,
      timeOfDay: 'AM',
      end: '2:00 PM',
      endInMin: 840,
      durationInMin: 120,
      priority: 'low'
    },
    {
      eventId: 'ytuitkukt',
      eventHeadline: 'Fourth ToDo',
      eventDesc: 'Fourth Mock Todo For Testing',
      day: 'Sat',
      fullStartTime: '08:45 AM',
      hour: '8',
      startInMin: 525,
      timeOfDay: 'AM',
      end: '11:00 AM',
      endInMin: 660,
      durationInMin: 255,
      priority: 'none'
    },
    {
      eventId: 'jylruti',
      eventHeadline: 'Fifth ToDo',
      eventDesc: 'Fifth Mock Todo For Testing',
      day: 'Mon',
      fullStartTime: '05:00 PM',
      hour: '5',
      startInMin: 300,
      timeOfDay: 'PM',
      end: '07:00 PM',
      endInMin: 420,
      durationInMin: 120,
      priority: 'none'
    },
  ]
}) {
  return reduxCreateStore(reducer, initialState);
}