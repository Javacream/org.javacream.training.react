import React from 'react';
import { Person } from '../model/People';
export interface PersonProp{
    person: Person;
    detail: boolean;
    deletePersonHandler?: (id: number) => void
}
const PersonComponent = (props: PersonProp) => {
    if (props.detail){
        return (
            <p onDoubleClick={() => {if (props.deletePersonHandler) {props.deletePersonHandler!(props.person.id) }}}>ID: {props.person.id}, Firstname: {props.person.firstname}, Lastname:  {props.person.lastname}, Gender: {props.person.gender}, Height: {props.person.height}</p>
        );
    }else{
        return (
            <p>
              {props.person.firstname} {props.person.lastname}
            </p>
        )
    }
}

export default PersonComponent