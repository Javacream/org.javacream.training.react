import React from 'react';
import {Person} from '../model/People';

export interface PersonProp{
    person: Person;
}
export let PersonComponent = (props: PersonProp) => {

        return (
            <div>
              <li>Firstname: {props.person.firstname} Lastname: {props.person.lastname}</li>
              </div>
        )

}


