const ACTIONS = {
  CHANGE_ROUTE: 'CHANGE_ROUTE'
}

export default {
  changeRoute(route) {
    return {
      type: ACTIONS.CHANGE_ROUTE,
      payload: route
    }
  }
}