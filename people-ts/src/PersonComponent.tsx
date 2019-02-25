import React from 'react';
import {Person} from './model/People';

export interface PersonProp{
    person: Person;
}
export class PersonComponent extends React.Component<PersonProp>{

    constructor(prop :PersonProp){
        super(prop)
    }

    render(){
        return (
            <div>
              <p>Firstname: {this.props.person.firstname} Lastname: {this.props.person.lastname}</p>
              </div>
        )
    }

}


