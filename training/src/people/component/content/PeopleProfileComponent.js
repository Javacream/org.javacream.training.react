import React from 'react';
import {profile} from '../../model/PeopleData' 
function PeopleProfileComponent(){

    return (
    <p class="profile">Hello {profile.firstname} {profile.lastname}</p>
    )
}

export default PeopleProfileComponent