import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import PersonComponent from './components/PersonComponent'
import ClockComponent from './components/ClockComponent'
import ClockComponentFunctionalNoRerender from './components/ClockComponentFunctionalNoRerender'
import ClockComponentFunctionalStateHook from './components/ClockComponentFunctionalStateHook'
import {applicationContext} from './context/ApplicationContext'
import {StopClockComponent} from './components/StopClockComponent'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent'
import PeopleComponent from './components/PeopleComponent'
import EmployeeComponent from './components/EmployeeComponent'
const App: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <hr />
      Current User: 
      <PersonComponent person={applicationContext.currentUser} />
      <BrowserRouter>
          <>
          <NavigationComponent />
          <hr />
          <Switch>
            <Route path='/clock' component={ClockSample}/>
            <Route path='/people' component={PeopleComponent}/>
            <Route path='/employees' component={EmployeeComponent}/>
          </Switch>
          </>
</BrowserRouter>
    </>
  );
}

const ClockSample: React.FC = () => {
  return (

    <> 
    <hr />
    Using PureComponent: <ClockComponent />
    <hr />
    Using Functional Component with Closure: <ClockComponentFunctionalNoRerender />
    <hr />
    Using Functional Component with Hook: <ClockComponentFunctionalStateHook />
    <hr />
    <StopClockComponent />

    </>
  )
}
export default App;
