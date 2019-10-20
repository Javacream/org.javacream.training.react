import React from 'react';
import './App.css';
import {peopleData, userProfile} from './people/testdata/PeopleData'
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'
import PeopleComponent from './people/component/PeopleComponent'
function App() {
  return (
    <div className="App">
    <PeopleHeaderComponent />
    <PersonComponent person={userProfile} className='profile'/>
    <hr />
    <PeopleComponent people={peopleData} />
    <PeopleFooterComponent />
    </div>
  );
}

export default App;
