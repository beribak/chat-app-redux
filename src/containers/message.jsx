import React, { Component } from 'react';

class Message extends Component {

	render() {

		return(
			<div className="message">
				<h4>{this.props.message.content}</h4>
			</div>
		);
	}
}

export default Message;