import React, {useState} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'

let first = true;
let PeopleAppComponent = () => {
    const [people, updatePeople] = useState({data: peopleData})
    const [profile, updateUserProfile] = useState(userProfile)
    if (first){
        setTimeout(() => {
            userProfile.lastname = "Hoffmann"
            updateUserProfile({...userProfile})
            }, 5000)
        setTimeout(() => {
                peopleData.add("Ziegler", "Hanns", 155, 'm')
                updatePeople({data: peopleData})
            }, 3000)
        first = false    
    }
    return (
        <>
            <PersonComponent person={profile} className='profile'/>
            <hr />
            <PeopleComponent people={people.data} />
        </>
    )
}

export default PeopleAppComponent