import React from 'react';
import {defaultPerson} from '../../model/PeopleData' 
function PeopleContentComponent(){

    return (
    <p>{defaultPerson.info()}</p>
    )
}

export default PeopleContentComponent