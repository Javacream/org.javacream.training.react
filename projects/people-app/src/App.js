import React from 'react';
import './App.css';
import {SamplePersonComponent} from './components/SamplePersonComponent'
import {PersonDetailComponent} from './components/PersonDetailComponent'
import {PeopleComponent} from './components/PeopleComponent'
import {PersonInputFormComponent} from './components/PersonInputFormComponent'
import {LoggingComponent} from './components/LoggingComponent'
import {NavigationComponent} from './components/NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (<BrowserRouter>

    <LoggingComponent />
    <SamplePersonComponent />
    <NavigationComponent />
    <Switch>
      <Route path='/people' component={PeopleComponent}/>    
      <Route path='/peopleInput' component={PersonInputFormComponent}/>    
    </Switch>
    </BrowserRouter>
    );
}

export default App;
