import React from 'react';
import './App.css';
import {HeaderComponent} from './components/HeaderComponent'
import {PersonComponent} from './components/PersonComponent'
import {currentUser} from './model/PeopleModel'
const App: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <hr />
      Current User: 
      <PersonComponent person={currentUser} />
    </div>
  );
}

export default App;
