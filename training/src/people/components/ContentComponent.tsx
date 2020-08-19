import React, {useState} from 'react';
import PeopleListComponent from './PeopleListComponent'
import NavigationComponent from './NavigationComponent'
import PersonInputFormComponent from './PersonInputComponent'
import {peopleModel} from '../ApplicationContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function ContentComponent() {

    const [data, updatePeople] = useState({people:peopleModel.findAll()})
    const handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
          peopleModel.create(lastname, firstname, gender, height)
          updatePeople({people: peopleModel.findAll()})
    }
    return  (
      <div id="content">
    <BrowserRouter>
          <div>
            <NavigationComponent />
            <hr />
            <Switch>
            <Route path='/people' render={(props) => <PeopleListComponent {...props} people={data.people} />} />    
            <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} callback={handlePersonCreation} />}/>    
            </Switch>
          </div>
        </BrowserRouter>

  </div>
      )
    }



    