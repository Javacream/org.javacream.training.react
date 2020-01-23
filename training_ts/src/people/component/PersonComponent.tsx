import React from 'react';
import {Person} from '../model/People';

export interface PersonProp{
    person: Person;
    detail: boolean;
    className: string
}
let PersonComponent = (props: PersonProp) => {
    if (props.detail){
        return (
            <p className={props.className}>Firstname: {props.person.firstname}, Lastname:  {props.person.lastname}, Gender: {props.person.gender}, Height: {props.person.height}</p>
        );
    }
    else{
        return (
            <p className={props.className}>
              {props.person.firstname} {props.person.lastname}
            </p>
        )
    }

}

export default PersonComponent