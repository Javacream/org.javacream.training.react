import React from 'react';
import './App.css';
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PeopleAppComponent from './people/component/PeopleAppHookComponent'
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
