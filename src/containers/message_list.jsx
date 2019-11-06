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

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{fetchMessages},
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);