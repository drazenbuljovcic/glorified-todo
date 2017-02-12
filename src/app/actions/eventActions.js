const ACTIONS = {
  'SHOW_EVENT_DETAILS': 'SHOW_EVENT_DETAILS',
  'DELETE_EVENT_ANSWER': 'DELETE_EVENT_ANSWER'
}

export default {
  showEventDetails(event) {
    return {
      type: ACTIONS.SHOW_EVENT_DETAILS,
      payload: event
    }
  },
  deleteEventAnswer(answer) {
    return {
      type: ACTIONS.DELETE_EVENT_ANSWER,
      payload: answer
    }
  }
}