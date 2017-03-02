import helperReducerFunctions from './helperReducerFunctions';
import eventReducerFunctions from './eventReducerFunctions';

export default function reducer(state, action) {
  switch(action.type) {
    //helper reducer functions
    case 'CHANGE_ROUTE': return helperReducerFunctions.changeRoute(state, action)
    case 'SET_ADD_EVENT_INDICATOR': return helperReducerFunctions.setAddEventIndicator(state, action)
    case 'SET_DELETE_EVENT': return helperReducerFunctions.setEventToBeDeleted(state, action)
    //event reducer
    case 'SHOW_EVENT_DETAILS': return eventReducerFunctions.showEventDetails(state, action)
    case 'DELETE_EVENT_ANSWER': return eventReducerFunctions.maybeDeleteEvent(state, action)
    default:
      return state;
  }
}