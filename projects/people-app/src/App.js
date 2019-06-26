import React from 'react';
import './App.css';
import {SamplePersonComponent} from './components/SamplePersonComponent'
import {PeopleComponent} from './components/PeopleComponent'
import {PersonInputFormComponent} from './components/PersonInputFormComponent'
import {LoggingComponent} from './components/LoggingComponent'
import {NavigationComponent} from './components/NavigationComponent'
import {PeopleServerComponent} from './components/PeopleServerComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (<BrowserRouter>

    <LoggingComponent />
    <SamplePersonComponent />
    <NavigationComponent />
    <Switch>
      <Route path='/people' component={PeopleComponent}/>    
      <Route path='/peopleInput' component={PersonInputFormComponent}/>    
      <Route path='/peopleFromServer' component={PeopleServerComponent}/>    
    </Switch>
    </BrowserRouter>
    );
}

export default App;
