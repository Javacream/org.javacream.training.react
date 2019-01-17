import React from 'react';

import {PeopleComponent} from './people/components/PeopleComponent'
import {PeopleServerComponent} from './people/components/PeopleServerComponent'
import {WelcomeComponent} from './people/components/WelcomeComponent'
import {FunctionDemoMainComponent} from './demo/FunctionDemoComponents'
import {ClientServerComponent} from './demo/ClientServerComponent'
import {AuditSubscriptionComponent} from './demo/AuditSubscriptionComponent'
import {NavigationComponent} from './NavigationComponent'
import {ToDosComponent} from './todo/components/ToDosComponent'

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
          <Route path='/todo' component={ToDosComponent}/>
          <Route exact path='/functionDemo' component={FunctionDemoMainComponent}/>
          <Route exact path='/clientServerDemo' component={ClientServerComponent}/>
          <Route exact path='/auditDemo' component={AuditSubscriptionComponent}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main
