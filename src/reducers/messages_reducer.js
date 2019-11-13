export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
    	return action.payload;
    case  'CREATE_MESSAGE':
    	return state.push(action.payload);
    default:
      return state;
  }
}