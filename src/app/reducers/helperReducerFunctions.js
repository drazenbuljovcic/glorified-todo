export default (() => {
  
  function changeRoute(state, action) {
    return {
      ...state,
      indicators: { ...state.indicators, addEventIndicator: false, dashboardDeleteIndicator: false },
      eventIdentifiers: { ...state.eventIdentifiers, showEventDetails: null, deleteEvent: null },
      route: action.payload
    }
  }

  function setAddEventIndicator(state, action) {
    return {
      ...state,
      indicators: { ...state.indicator, addEventIndicator: action.payload }
    }
  }

  function setEventToBeDeleted(state, action) {
    return {
      ...state,
      indicators: { ...state.indicators, dashboardDeleteIndicator: action.payload.indicator },
      eventIdentifiers: { ...state.eventIdentifiers, deleteEvent: action.payload.eventId
      }
    }
  }

  return {
    changeRoute,
    setAddEventIndicator,
    setEventToBeDeleted
  }
  
})()