import React, {Component} from 'react';
import {peopleController} from '../../PeopleContext' 
import PubSub from 'pubsub-js'
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputFormComponent'

class PeopleContentComponent extends Component{
    state = {data: peopleController.allPeople()}
    constructor(){
        super()
        PubSub.subscribe("person.created", this.createPersonCallback)
    }
    createPersonCallback = (personData) =>{
        peopleController.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        this.setState({data: peopleController.allPeople()})
    }


    render (){
    return (
        <>
            <PeopleListComponent peopleList={this.state.data}/>
            <hr />
            <PersonInputFormComponent />
        </>
    )
}
}

export default PeopleContentComponent