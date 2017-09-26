import React, { Component } from 'react';
import './App.css';

import GitHub from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GitHub username="marychellecarreon"></GitHub>
      </div>
    );
  }
}

export default App;
