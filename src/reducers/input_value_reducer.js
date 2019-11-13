export default function(state = 'hello', action) {
  switch (action.type) {
    case 'FETCH_INPUT_VALUE':
    	return action.payload;
    default:
      return state;
  }
}