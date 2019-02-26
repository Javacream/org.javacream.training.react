import React, { Component } from 'react';
import {BrowserRouter, Route, Switch  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {StatelessPersonSampleDataComponent} from './PeopleSampleDataComponent'
import {ClockComponent} from './ClockComponent'
import {WelcomeComponent} from './WelcomeComponent'
import {NavigationComponent} from './NavigationComponent'
import {PeopleComponent} from './PeopleComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100"/>
          <hr />
          <ClockComponent />
          <hr />
          <BrowserRouter>
          <div>
          <NavigationComponent />
          <hr />
          <Switch>
            <Route path='/welcome' component={WelcomeComponent}/>
            <Route path='/peopleSample' component={StatelessPersonSampleDataComponent}/>
            <Route path='/people' component={PeopleComponent}/>
          </Switch>
          </div>
        </BrowserRouter>
      </header>
      </div>
    );
  }
}

export default App;
