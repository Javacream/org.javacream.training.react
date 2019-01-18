import React, {Component} from 'react';
import {samplePeople} from '../model/PeopleData' 
import {PersonComponent} from './PersonComponent' 
class PeopleComponent extends Component{
    render(){
        const callback = (p) => {
            return (<li><PersonComponent person={p} /></li>)
        }

        const people = samplePeople.map(callback);
        return (<ul>{people}</ul>)
    }
}

export {PeopleComponent}