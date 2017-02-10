const ACTIONS = {
  CHANGE_ROUTE: 'CHANGE_ROUTE',
  SET_ADD_EVENT_INDICATOR: 'SET_ADD_EVENT_INDICATOR',
  SET_DASHBOARD_DELETE_INDICATOR: 'SET_DASHBOARD_DELETE_INDICATOR'
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
  setDashboardDeleteIndicator: (indicator) => {
    return {
      type: ACTIONS.SET_DASHBOARD_DELETE_INDICATOR,
      payload: indicator
    }
  }
}