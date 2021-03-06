import React from 'react';

import Message from '../containers/message';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="app">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
