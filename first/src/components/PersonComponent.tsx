import React from 'react';
import {Person} from '../model/PeopleModel';

export interface PersonProp{
    person: Person;
}

const PersonComponent = (props: PersonProp) => {
    return (
            <>
              <li>Firstname: {props.person.firstname} Lastname: {props.person.lastname}</li>
            </>
        )

}

export default PersonComponent