import React, {Component} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from './PersonInputFormComponent'

export default class PeopleAppComponent extends Component{
    state = {people: peopleData, userProfile: userProfile}
    constructor(){
        super()
        setTimeout(() => {
            userProfile.lastname = "Hoffmann"
            this.setState({...this.state, ...{userProfile: userProfile}})
        }, 5000)
        setTimeout(() => {
            peopleData.add("Ziegler", "Hanns", 155, 'm')
            this.setState({...this.state, ...{people: peopleData}})
        }, 3000)

        //createPerson = createPerson.bind(this)
    }

    createPersonCallback = (personData) =>{
        peopleData.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        console.log("CREATE_PERSON " + personData)
        this.setState({...this.state, ...{people: peopleData}})

    }
    render(){
        return (
            <>
                <PersonComponent person={this.state.userProfile} className='profile'/>
                <hr />
                <PeopleComponent people={this.state.people} />
                <hr />
                <PersonInputFormComponent handleCreatePerson={this.createPersonCallback}/>
            </>
        )
    }
}
