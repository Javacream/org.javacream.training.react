import React, {Component} from 'react';
import {samplePeople} from '../model/PeopleData' 
import {PersonComponent} from './PersonComponent' 
class PeopleComponent extends Component{
    render(){
        const people = samplePeople.map((p) => {
            return (<PersonComponent person={p} />)
        });
        return (<div>{people}</div>)
    }
}

export {PeopleComponent}