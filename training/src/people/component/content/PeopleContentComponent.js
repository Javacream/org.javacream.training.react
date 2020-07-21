import React from 'react';
import {profile} from '../../model/PeopleData' 
function PeopleContentComponent(){

    return (
    <p>{profile.info()}</p>
    )
}

export default PeopleContentComponent