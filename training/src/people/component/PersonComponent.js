import React from 'react';
import {peopleData} from '../testdata/PeopleData'
let PersonComponent = (props) => {
    if (props.detail){
        return (
            <p>Firstname: {props.person.firstname}, Lastname:  {props.person.lastname}, Gender: {props.person.gender}, Height: {props.person.height}</p>
        );
    }
    else{
        return (
            <p>{props.person.firstname} {props.person.lastname}</p>
        );
    }
}

export default PersonComponent