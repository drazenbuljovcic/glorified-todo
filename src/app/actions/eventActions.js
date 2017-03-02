const ACTIONS = {
  'SHOW_EVENT_DETAILS': 'SHOW_EVENT_DETAILS',
  'DELETE_EVENT_ANSWER': 'DELETE_EVENT_ANSWER'
}

export default (() => {

  function showEventDetails(event) {
    return { type: ACTIONS.SHOW_EVENT_DETAILS, payload: event }
  }

  function deleteEventAnswer(answer) {
    return { type: ACTIONS.DELETE_EVENT_ANSWER, payload: answer }
  }

  return {
    showEventDetails,
    deleteEventAnswer
  }

})()