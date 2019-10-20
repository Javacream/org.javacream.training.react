import React from 'react';
import './App.css';
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PeopleAppComponent from './people/component/PeopleAppHookComponent'
//import PeopleAppComponent from './people/component/PeopleAppComponent'
import LoggingComponent from './logging/component/LoggingComponent'

function App() {
  return (
    <div className="App">
    <PeopleHeaderComponent />
    <PeopleAppComponent />
    <hr />
    <LoggingComponent numberOfMessages="3" />
    <PeopleFooterComponent />
    </div>
  );
}

export default App;
