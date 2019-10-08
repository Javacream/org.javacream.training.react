import React, {Component} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'

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
    }
    render(){
        return (
            <>
                <PersonComponent person={this.state.userProfile} className='profile'/>
                <PeopleComponent people={this.state.people} />
            </>
        )
    }
}
