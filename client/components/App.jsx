import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.socketio = io();

  }

  render() {
    return (
      <div>
        <div className="BG" />
        <h2>entities</h2>
      </div>
    );
  }
}

export default App;
