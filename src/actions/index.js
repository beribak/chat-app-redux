export function fetchMessages() {
	// const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
	// .then(response => response.json());

	return{
		type: 'FETCH_MESSAGES',
		payload: state
	};
}

export function fetchInput(input) {

	return{
		type: 'FETCH_INPUT_VALUE',
		payload: input
	};
}