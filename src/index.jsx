// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger'; 
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import usersReducer from './reducers/users_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import inputValueReducer from './reducers/input_value_reducer';

const initialState = {
  messages: [
	  {
	    "author":"anonymous92",
	    "content":"Hello world!",
	    "created_at":"2017-09-26T23:03:16.365Z"
	  },
	  {
	    "author":"anonymous77",
	    "content":"My name is anonymous77",
	    "created_at":"2017-09-26T23:03:21.194Z"
	  }	
  ],
  channels: [ 'general', 'react', 'paris' ],
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general',
  inputValue: 'hello'
}; 

// State and reducers
const reducers = combineReducers({
 messages: messagesReducer,
 channels: channelsReducer,
 currentUser: usersReducer,
 selectedChannel: selectedChannelReducer,
 inputValue: inputValueReducer
});

const middlewares = applyMiddleware(reduxPromise, logger); 

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
