const ACTIONS = {
  'EVENT_DETAILS': 'EVENT_DETAILS'
}

export default {
  eventDetails(event) {
    return {
      type: ACTIONS.EVENT_DETAILS,
      payload: event
    }
  }
}