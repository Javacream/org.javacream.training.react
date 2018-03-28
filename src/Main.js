import React from 'react';

import {PeopleComponent} from './people/components/PeopleComponent'
import {PeopleServerComponent} from './people/components/PeopleServerComponent'
import {WelcomeComponent} from './people/components/WelcomeComponent'
import {FunctionDemoMainComponent} from './demo/FunctionDemoComponents'
import {ClientServerComponent} from './demo/ClientServerComponent'
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
          <Route path='/people' component={PeopleComponent}/>
          <Route path='/peopleFromServer' component={PeopleServerComponent}/>
          <Route exact path='/functionDemo' component={FunctionDemoMainComponent}/>
          <Route exact path='/clientServerDemo' component={ClientServerComponent}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main
