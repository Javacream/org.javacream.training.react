import React, {useState} from 'react';
import './PeopleApp.css';
import {PeopleAppFooter as Footer, PeopleContent as Content, PeopleAppHeader} from './people/PeopleMain'
import {user, peopleData} from './people/testdata/PeopleData'

let first = true;
let PeopleApp = () => {
    const [people, updatePeople] = useState({data: peopleData})
    const [profile, updateUserProfile] = useState(user)
    console.log("rendering")
    if (first){
        setTimeout(() => {
            user.lastname = "XXXXXXXXXXXXXX"
            updateUserProfile({...user})
            }, 5000)
        setTimeout(() => {
                peopleData.add("Sawitzki", "Egon", 199, 'm')
                updatePeople({data: peopleData})
            }, 3000)
        first = false    
    }
    return (
        <>
        <PeopleAppHeader />
        <Content people={people.data}/>
        <Footer user={profile}/>
        </>
      )
}

export default PeopleApp