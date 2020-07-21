import React, { Component } from 'react';
import {userProfile} from '../../PeopleContext' 
import PersonComponent from './PersonComponent'

class PeopleProfileComponent extends Component{
    state = {person: userProfile}

    constructor(){
        super()
        setTimeout(() => {
            userProfile.lastname = "CHANGED BY COMPONENT"
            this.setState({person: userProfile})
        }, 3000)
    }
    render(){
    return (
        <PersonComponent person={this.state.person} className="profile"/>
    )
    }
}

export default PeopleProfileComponent