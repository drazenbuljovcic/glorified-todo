export default function helperReducer(state) {
  switch(action.type) {
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        route: action.payload
      }, ...state);
    default:
      return state;
  }
}