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

export function createMessage(message) {
	// const body = {"content": message };

	// const promise = fetch('https://wagon-chat.herokuapp.com/general/messages/{"danko": "sdasd"}', {
	//   method: 'POST',
	//   headers: {
	//     'Accept': 'application/json',
	//     'Content-Type': 'application/json'
	//   },
	//   body: JSON.stringify(body)
	// }).then(r => r.json()); 

	return{
		type: 'CREATE_MESSAGE',
		payload: [{content: message}]
	};
}