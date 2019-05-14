import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import PersonComponent from './components/PersonComponent'
import ClockComponent from './components/ClockComponent'
import ClockComponentFunctionalNoRerender from './components/ClockComponentFunctionalNoRerender'
import ClockComponentFunctionalStateHook from './components/ClockComponentFunctionalStateHook'
import {applicationContext} from './context/ApplicationContext'
import {StopClockComponent} from './components/StopClockComponent'
const App: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <hr />
      Current User: 
      <PersonComponent person={applicationContext.currentUser} />
      <hr />
      Using PureComponent: <ClockComponent />
      <hr />
      Using Functional Component with Closure: <ClockComponentFunctionalNoRerender />
      <hr />
      Using Functional Component with Hook: <ClockComponentFunctionalStateHook />
      <hr />
      <StopClockComponent />
    </>
  );
}

export default App;
