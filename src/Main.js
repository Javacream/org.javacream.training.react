import React from 'react';

import {WelcomeComponent, PeopleComponent} from './PeopleAppComponents'
import {FunctionDemoMainComponent} from './FunctionDemoComponents'
import {NavigationComponent} from './NavigationComponent'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Main = (props) => {

  return (<div>
      <div><WelcomeComponent /></div>
      <BrowserRouter>
        <div>
        <NavigationComponent />
        <hr />
        <Switch>
          <Route exact path='/people' component={PeopleComponent}/>
          <Route exact path='/functionDemo' component={FunctionDemoMainComponent}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main
