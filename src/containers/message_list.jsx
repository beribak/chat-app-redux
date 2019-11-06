import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './message';

class MessageList extends Component {

	render() {

		return(
			<div className="message_list">
				{this.props.messages.map(message => <Message message={message} key={message.content} />)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

export default connect(mapStateToProps)(MessageList);