import React from 'react';
import {profile} from '../../test/PeopleData' 
function PeopleProfileComponent(){

    return (
    <p className="profile">Hello {profile.firstname} {profile.lastname}</p>
    )
}

export default PeopleProfileComponent