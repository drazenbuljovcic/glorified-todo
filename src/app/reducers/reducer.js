import helpers from '../helpers';

export default function reducer(state, action) {
  switch(action.type) {
    //helper reducer
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        route: action.payload,
        indicators: {
            addEventIndicator: false,
            dashboardDeleteIndicator: false
        },
        eventIdentifiers: {
          showEventDetails: null,
          deleteEvent: null
        }
      }, ...state);
    case 'SET_ADD_EVENT_INDICATOR':
      return Object.assign({}, state, {
        indicators: Object.assign({}, {
          addEventIndicator: action.payload
        }, ...state.indicators)
      }, ...state);
    case 'SET_DELETE_EVENT':
      return Object.assign({}, state, {
        indicators: Object.assign({}, {
          dashboardDeleteIndicator: action.payload.indicator
        }, ...state.indicators),
        eventIdentifiers: Object.assign({}, {
          deleteEvent: action.payload.eventId
        }, ...state.eventIdentifiers)
      }, ...state);
    //event reducer
    case 'SHOW_EVENT_DETAILS':
      return Object.assign({}, state, {
        eventIdentifiers: Object.assign({}, {
          showEventDetails: action.payload
        }, ...state.eventIdentifiers)
      }, ...state);
    case 'DELETE_EVENT_ANSWER':
      return Object.assign({}, state, {
        indicators: Object.assign({}, {
          dashboardDeleteIndicator: false
        }, ...state.indicators),
        eventIdentifiers: Object.assign({}, {
          deleteEvent: null
        }, ...state.eventIdentifiers),
        events: action.payload
          ? 
            helpers.sliceObjectFromArrayByIdFilter(state.events, 'eventId',  state.eventIdentifiers.deleteEvent)
          :
            state.events
      }, ...state); 
    default:
      return state;
  }
}