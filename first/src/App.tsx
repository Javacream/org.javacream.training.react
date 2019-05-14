import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import PersonComponent from './components/PersonComponent'
import ClockComponent from './components/ClockComponent'
import {currentUser} from './model/PeopleModel'
const App: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <hr />
      Current User: 
      <PersonComponent person={currentUser} />
      <hr />
      <ClockComponent />
    </>
  );
}

export default App;
