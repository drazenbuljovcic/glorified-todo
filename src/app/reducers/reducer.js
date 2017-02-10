export default function reducer(state, action) {
  switch(action.type) {
    //helper reducer
    case 'CHANGE_ROUTE':
      console.log(action.payload);
      console.log(state.eventDetails);
      console.log(state.indicators);
      console.log(state.eventIdentifiers);
      return Object.assign({}, state, {
        route: action.payload,
        indicators: {
            addEventIndicator: false,
            dashboardDeleteIndicator: false
        },
        eventIdentifiers: {
          eventDetails: null
        }
      }, ...state);
    case 'SET_ADD_EVENT_INDICATOR':
      return Object.assign({}, state, {
        indicators: Object.assign({}, {
          addEventIndicator: action.payload
        }, ...state.indicators)
      }, ...state);
    case 'SET_DASHBOARD_DELETE_INDICATOR':
      return Object.assign({}, state, {
        indicators: Object.assign({}, {
          dashboardDeleteIndicator: action.payload
        }, ...state.indicators)
      }, ...state);
    //event reducer
    case 'EVENT_DETAILS':
      return Object.assign({}, state, {
        eventIdentifiers: Object.assign({}, {
          eventDetails: action.payload
        }, ...state.eventIdentifiers)
      }, ...state);
    default:
      return state;
  }
}