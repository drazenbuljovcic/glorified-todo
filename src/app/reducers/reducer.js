export default function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        route: action.payload
      }, ...state);
    default:
      return state;
  }
}