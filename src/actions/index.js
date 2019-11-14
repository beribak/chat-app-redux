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

export function createMessage(message, messages) {
	// const body = {"content": message };

	// const promise = fetch('https://wagon-chat.herokuapp.com/general/messages/{"danko": "sdasd"}', {
	//   method: 'POST',
	//   headers: {
	//     'Accept': 'application/json',
	//     'Content-Type': 'application/json'
	//   },
	//   body: JSON.stringify(body)
	// }).then(r => r.json());
	 let m = message;
	 let arr = messages;
	 const ob = { content: m };
	 arr.push(ob);
	return{
		type: 'CREATE_MESSAGE',
		payload: arr//[{content: message}]
	};
}