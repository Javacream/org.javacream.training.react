import React from 'react';
import {PersonClass, samplePerson} from './model/People';
export class PersonComponent extends React.Component{
    attributePerson = new PersonClass(9, "Musterfrau", "Hanna");

    render(){
        return (
            <div>
                <p>{this.attributePerson.lastname}</p>
                <p>{samplePerson.lastname}</p>
            </div>

        );
    }

}
