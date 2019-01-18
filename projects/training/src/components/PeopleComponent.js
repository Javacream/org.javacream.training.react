import React, {Component} from 'react';
import {samplePeople} from '../model/PeopleData' 
import {PersonComponent} from './PersonComponent' 
class PeopleComponent extends Component{

    constructor(){
        super()
        this.state = {people: samplePeople}
    }
    render(){
        const callback = (p) => {
            return (<PersonComponent key={'person-' + p.personId} person={p} />)
        }

        const people = this.state.people.map(callback);
        return (<ul>{people}</ul>)
    }
}

export {PeopleComponent}