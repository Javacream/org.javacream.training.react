import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PersonComponent} from './PersonComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
          <PersonComponent />
        </header>
      </div>
    );
  }
}

export default App;
