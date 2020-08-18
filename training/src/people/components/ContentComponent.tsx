import React, { PureComponent } from 'react';
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputComponent'
import {peopleModel} from '../ApplicationContext'

export default class ContentComponent extends PureComponent {

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
    handlePersonCreation(data:any){
        peopleModel.create(...peopleModel.)
        this.state = {people: peopleModel.findAll()}

    }
}

