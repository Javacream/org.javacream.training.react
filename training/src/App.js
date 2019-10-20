import React from 'react';
import './App.css';
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PeopleAppComponent from './people/component/PeopleAppHookComponent'
//import PeopleAppComponent from './people/component/PeopleAppComponent'
function App() {
  return (
    <div className="App">
    <PeopleHeaderComponent />
    <PeopleAppComponent />
    <PeopleFooterComponent />
    </div>
  );
}

export default App;
