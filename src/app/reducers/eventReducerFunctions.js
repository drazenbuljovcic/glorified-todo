import helpers from '../helpers';

export default (() => {
  
  function showEventDetails(state, action) {
    return {
      ...state,
      eventIdentifiers: { ...state.eventIdentifiers, showEventDetails: action.payload }
    }
  }
  
  function maybeDeleteEvent(state, action) {
      return {
        ...state,
        indicators: { ...state.indicators, dashboardDeleteIndicator: false },
        eventIdentifiers: { ...state.eventIdentifiers, deleteEvent: null },
        events: action.payload 
          ?
            [...helpers.sliceObjectFromArrayByIdFilter(state.events, 'eventId', state.eventIdentifiers.deleteEvent)]
          : 
            [...state.events]
      }
  }

  return {
    showEventDetails,
    maybeDeleteEvent    
  }

})()