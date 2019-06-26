import React from 'react';
import './App.css';
import {SamplePersonComponent} from './components/SamplePersonComponent'
import {PeopleComponent} from './components/PeopleComponent'
import {PersonInputFormComponent} from './components/PersonInputFormComponent'
import {LoggingComponent} from './components/LoggingComponent'
function App() {
  return (<>
    <LoggingComponent />
    <SamplePersonComponent />
    <hr ></hr>
    <PeopleComponent />
    <PersonInputFormComponent />
    </>
    );
}

export default App;
