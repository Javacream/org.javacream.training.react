import React, {useState} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from './PersonInputFormComponent'

let first = true;
let PeopleAppComponent = () => {
    const [people, updatePeople] = useState({data: peopleData})
    const [profile, updateUserProfile] = useState({data: userProfile})
    if (first){
        setTimeout(() => {
            userProfile.lastname = "Hoffmann"
            updateUserProfile({data: userProfile})
            }, 5000)
        setTimeout(() => {
                peopleData.add("Ziegler", "Hanns", 155, 'm')
                updatePeople({data: peopleData})
            }, 3000)
        first = false    
    }

    let createPersonCallback = (personData) =>{
        peopleData.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        updatePeople({data: peopleData})
    }
    return (
        <>
            <PersonComponent person={profile.data} className='profile'/>
            <hr />
            <PeopleComponent people={people.data} />
            <hr />
            <PersonInputFormComponent handleCreatePerson={createPersonCallback}/>
        </>
    )
}

export default PeopleAppComponent