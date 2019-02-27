import React, { Component } from 'react';
import {BrowserRouter, Route, Switch  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {StatelessPersonSampleDataComponent} from './component/PeopleSampleDataComponent'
import {ClockComponent} from './component/ClockComponent'
import {LogComponent} from './component/LogComponent'
import {WelcomeComponent} from './component/WelcomeComponent'
import {NavigationComponent} from './component/NavigationComponent'
import {PeopleComponent} from './component/PeopleComponent'
import {PeopleServerComponent} from './component/PeopleServerComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100"/>
          <hr />
          <ClockComponent />
          <LogComponent />
          <hr />
          <BrowserRouter>
          <div>
          <NavigationComponent />
          <hr />
          <Switch>
            <Route path='/welcome' component={WelcomeComponent}/>
            <Route path='/peopleSample' component={StatelessPersonSampleDataComponent}/>
            <Route path='/people' component={PeopleComponent}/>
            <Route path='/peopleServer' component={PeopleServerComponent}/>
          </Switch>
          </div>
        </BrowserRouter>
      </header>
      </div>
    );
  }
}

export default App;
