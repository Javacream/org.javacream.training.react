import React from 'react';
import PeopleListComponent from './PeopleListComponent'
import {peopleModel} from './PeopleApplicationContext'
import { Person } from '../model/PeopleModel';
import PersonInputComponent from './PersonInputComponent'
export class ContentComponent extends React.PureComponent {
    state = {people: new Array<Person>()}
    componentDidMount(){
      this.setState({people: peopleModel.findAll()})
    }

    handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
      peopleModel.create(lastname, firstname, gender, height)
      this.setState({people: peopleModel.findAll()})
}
    render(){
      return  (
        <>
          <PeopleListComponent people={peopleModel.findAll()}/>
          <hr />
          <PersonInputComponent callback={this.handlePersonCreation}/>

        </>
      )
}

}