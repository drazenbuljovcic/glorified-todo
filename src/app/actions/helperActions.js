const ACTIONS = {
  CHANGE_ROUTE: 'CHANGE_ROUTE',
  SET_ADD_EVENT_INDICATOR: 'SET_ADD_EVENT_INDICATOR',
  SET_DELETE_EVENT: 'SET_DELETE_EVENT',
}

export default {
  changeRoute: (route) => {
    return {
      type: ACTIONS.CHANGE_ROUTE,
      payload: route
    }
  },
  setAddEventIndicator: (indicator) => {
    return {
      type: ACTIONS.SET_ADD_EVENT_INDICATOR,
      payload: indicator
    }
  },
  setDeleteEvent: (indicator, eventId) => {
    return {
      type: ACTIONS.SET_DELETE_EVENT,
      payload: {
        indicator: indicator,
        eventId: eventId  
      }
    }
  }
}