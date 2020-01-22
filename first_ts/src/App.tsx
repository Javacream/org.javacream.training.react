import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  let htmlFragment = (<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>
</div>)
return htmlFragment;
}

export default App;
