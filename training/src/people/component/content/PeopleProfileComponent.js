import React from 'react';
import {userProfile} from '../../PeopleContext' 
import PersonComponent from './PersonComponent'
function PeopleProfileComponent(){

    return (
        <PersonComponent person={userProfile} className="profile"/>
    )
}

export default PeopleProfileComponent