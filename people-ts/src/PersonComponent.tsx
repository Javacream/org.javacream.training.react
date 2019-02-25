import React from 'react';
import {PersonClass, Person, samplePerson} from './model/People';
export class PersonComponent extends React.Component{
    attributePerson1 = new PersonClass(9, "Musterfrau", "Hanna");
    attributePerson2: Person = {personId: 19, lastname: "Muster", firstname: "Han"}

    render(){
        return (
            <div>
                <p>{this.attributePerson1.lastname}</p>
                <p>{this.attributePerson2.lastname}</p>
                <p>{samplePerson.lastname}</p>
            </div>

        );
    }

}
