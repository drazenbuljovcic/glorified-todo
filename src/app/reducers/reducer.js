export default function reducer(state, action) {
  switch(action.type) {
    //helper reducer
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        route: action.payload
      }, ...state);
    //event reducer
    case 'EVENT_DETAILS':
      return Object.assign({}, state, {
        eventDetails: action.payload
      }, ...state);
    default:
      return state;
  }
}