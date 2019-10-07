import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentComponent from './content/component/ContentComponent'
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'

function App() {
  return (
    <div className="App">
    <PeopleHeaderComponent />
    <ContentComponent />
    <PeopleFooterComponent />
    </div>
  );
}

export default App;
