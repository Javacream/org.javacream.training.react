import React, {Component} from 'react';
import {peopleController} from '../../PeopleContext' 
import PubSub from 'pubsub-js'
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputFormComponent'
import PeopleServerComponent from './PeopleServerComponent';

class PeopleContentComponent extends Component{
    state = {data: peopleController.allPeople()}
    componentDidMount(){
        this.token = PubSub.subscribe("person.create", this.createPersonCallback)
    }
    createPersonCallback = (topic, personData) =>{
        peopleController.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        this.setState({data: peopleController.allPeople()})
    }


    render (){
    return (
        <>
            <PeopleListComponent peopleList={this.state.data}/>
            <hr />
            <PersonInputFormComponent />
            <hr />
            <PeopleServerComponent />
        </>
    )
}
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

}

export default PeopleContentComponent