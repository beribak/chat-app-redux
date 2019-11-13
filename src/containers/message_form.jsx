import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchInput } from '../actions';
import { createMessage } from '../actions';

class MessageForm extends Component {

	handleChange = (event) => {
   		this.props.fetchInput(event.target.value);
  		this.props.createMessage(this.props.inputValue);
  	}

  	handleSubmit = () => {
   		this.props.createMessage(this.props.inputValue);
  	}

	render() {

		return(
			<form className="message-form" onSubmit={this.handleSubmit}>
				<input type="text" value={this.props.inputValue} onChange={this.handleChange} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ fetchInput, createMessage },
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		inputValue: state.inputValue
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);