import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from './message';

class MessageList extends Component {

	componentWillMount() {
    	this.props.fetchMessages();
  	}

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

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{fetchMessages},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);