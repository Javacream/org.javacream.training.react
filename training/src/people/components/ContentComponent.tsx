import React, { PureComponent } from 'react';
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputComponent'
import {peopleModel} from '../ApplicationContext'
import { Person } from '../model/People';

export default class ContentComponent extends PureComponent<{}, {people:Array<Person>}> {

    state = {people: peopleModel.findAll()}
    render(){
    return  (
        <div id="content">
            <PeopleListComponent people={this.state.people}/>
            <hr />
            <PersonInputFormComponent callback={this.handlePersonCreation}/>
        </div>
      )
    }
    handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
        peopleModel.create(lastname, firstname, gender, height)
        this.setState({people: peopleModel.findAll()})

    }
}

