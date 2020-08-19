import React from 'react';
import PeopleListComponent from './PeopleListComponent'
import NavigationComponent from './NavigationComponent'
import PersonInputFormComponent from './PersonInputComponent'
import PersonSearchComponent from './PersonSearchComponent'
import {peopleController, peopleModel} from '../ApplicationContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class ContentComponent extends React.PureComponent {

    state = {people: await peopleController.loadPeople()}
    const handlePersonCreation = async (lastname:string, firstname:string, gender:string, height:number) =>{
          peopleModel.create(lastname, firstname, gender, height)
          updatePeople({people: await peopleController.loadPeople()})
    }
    render(){
    return  (
      <div id="content">
    <BrowserRouter>
          <div>
            <NavigationComponent />
            <hr />
            <Switch>
            <Route path='/people' render={(props) => <PeopleListComponent {...props} people={data.people} />} />    
            <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} callback={handlePersonCreation} />}/>    
            <Route path='/peopleSearch' render={(props) => <PersonSearchComponent {...props} />}/>    
            </Switch>
          </div>
        </BrowserRouter>

  </div>
      )
    }
  }


    