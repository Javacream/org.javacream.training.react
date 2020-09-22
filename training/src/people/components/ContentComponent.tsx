import React, { useState } from 'react';
import PeopleListComponent from './PeopleListComponent'
import {peopleModel} from './PeopleApplicationContext'
import PersonInputComponent from './PersonInputComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationComponent from './NavigationComponent'
export function ContentComponent() {
    let [people, updatePeople] = useState(peopleModel.findAll())
    const handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
      peopleModel.create(lastname, firstname, gender, height)
      updatePeople(peopleModel.findAll())
    }
    return  (
       <>
  <div id="content">
    <BrowserRouter>
          <div>
            <NavigationComponent />
            <hr />
            <Switch>
            <Route path='/people' render={(props) => <PeopleListComponent {...props} people={people} />} />    
            <Route path='/peopleInput' render={(props) => <PersonInputComponent {...props} callback={handlePersonCreation} />}/>    
            </Switch>
          </div>
        </BrowserRouter>

  </div>
       </>
      )
}