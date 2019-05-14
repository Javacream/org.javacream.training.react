import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import PersonComponent from './components/PersonComponent'
import ClockComponent from './components/ClockComponent'
import ClockComponentFunctionalNoRerender from './components/ClockComponentFunctionalNoRerender'
import ClockComponentFunctionalStateHook from './components/ClockComponentFunctionalStateHook'
import {currentUser} from './model/PeopleModel'
const App: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <hr />
      Current User: 
      <PersonComponent person={currentUser} />
      <hr />
      Using PureComponent: <ClockComponent />
      <hr />
      Using Functional Component with Closure: <ClockComponentFunctionalNoRerender />
      <hr />
      Using Functional Component with Hook: <ClockComponentFunctionalStateHook />
    </>
  );
}

export default App;
