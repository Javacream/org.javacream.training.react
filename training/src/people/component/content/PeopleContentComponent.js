import React, {Component} from 'react';
import {peopleController} from '../../PeopleContext' 
import PubSub from 'pubsub-js'
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputFormComponent'

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
        </>
    )
}
    componentWillUnmount(){
        console.log("DEXT")

        PubSub.unsubscribe(this.token)
    }

}

export default PeopleContentComponent