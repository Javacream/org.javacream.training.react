import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PersonSampleDataComponent} from './PeopleSampleDataComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
          <PersonSampleDataComponent />
        </header>
      </div>
    );
  }
}

export default App;
