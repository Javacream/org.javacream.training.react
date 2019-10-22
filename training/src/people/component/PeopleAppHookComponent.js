import React, {useState} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from './PersonInputFormComponent'
import PeopleFromServerComponent from './PeopleFromServerComponent'
import PersonSearchComponent from './PersonSearchComponent.js'
import NavigationComponent from './NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

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
        <BrowserRouter>
            <PersonComponent person={profile.data} className='profile'/>
            <NavigationComponent />
            <hr />
            <Switch>
                <Route path='/people' render={(props) => <PeopleComponent {...props} people={people.data} />} />    
                <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} handleCreatePerson={createPersonCallback} />}/>    
                <Route path='/peopleFromServer' component={PeopleFromServerComponent}/>    
                <Route path='/peopleSearch' component={PersonSearchComponent}/>    
            </Switch>
        </BrowserRouter>
    )
return (
        <>
            <PersonComponent person={profile.data} className='profile'/>
            <hr />
            <PeopleComponent people={people.data} />
            <hr />
            <PersonInputFormComponent handleCreatePerson={createPersonCallback}/>
            <hr />
            <PeopleFromServerComponent />  
            <hr />
            <PersonSearchComponent />       </>
    )
}

export default PeopleAppComponent