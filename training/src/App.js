import React from 'react';
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'
import PeopleComponent from './people/component/PeopleComponent'
function App() {
  return (
    <div className="App">
      <PeopleHeaderComponent />
      <PersonComponent />
      <hr />
      <PeopleComponent />
      <PeopleFooterComponent />
    </div>
  );
}

export default App;
