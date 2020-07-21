import React, {useState} from 'react';
import {peopleController} from '../../PeopleContext' 
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputFormComponent'

function PeopleContentComponent(){
    const [people, updatePeople] = useState({data: peopleController.allPeople()})
    
    let createPersonCallback = (personData) =>{
        peopleController.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        updatePeople({data: peopleController.allPeople()})
    }
    
    return (
        <>
            <PeopleListComponent peopleList={people.data}/>
            <hr />
            <PersonInputFormComponent handleCreatePerson={createPersonCallback} />
        </>
    )
}

export default PeopleContentComponent