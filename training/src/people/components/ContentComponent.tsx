import React from 'react';
import PeopleListComponent from './PeopleListComponent'
import NavigationComponent from './NavigationComponent'
import PersonInputFormComponent from './PersonInputComponent'
import PersonSearchComponent from './PersonSearchComponent'
import {peopleController, peopleModel} from '../ApplicationContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Person } from '../model/People';

export default class ContentComponent extends React.PureComponent{
  state = {people: new Array<Person>()}
  
  async componentDidMount(){
    this.setState({people: await peopleController.loadPeople()})
  }
  handlePersonCreation = async (lastname:string, firstname:string, gender:string, height:number) =>{
          peopleModel.create(lastname, firstname, gender, height)
          this.setState({people: await peopleController.loadPeople()})
    }

    render(){
    return  (
      <div id="content">
    <BrowserRouter>
          <div>
            <NavigationComponent />
            <hr />
            <Switch>
            <Route path='/people' render={(props) => <PeopleListComponent {...props} people={this.state.people} />} />    
            <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} callback={this.handlePersonCreation} />}/>    
            <Route path='/peopleSearch' render={(props) => <PersonSearchComponent {...props} />}/>    
            </Switch>
          </div>
        </BrowserRouter>

  </div>
      )
    }

  }
    