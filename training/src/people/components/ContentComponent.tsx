import React, { useState } from 'react';
import PeopleListComponent from './PeopleListComponent'
import {peopleModel} from './PeopleApplicationContext'
import PersonInputComponent from './PersonInputComponent'

export function ContentComponent() {

    let [people, updatePeople] = useState(peopleModel.findAll())
    const handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
      peopleModel.create(lastname, firstname, gender, height)
      updatePeople(peopleModel.findAll())
    }
    return  (
       <>
         <PeopleListComponent people={people}/>
         <hr />
         <PersonInputComponent callback={handlePersonCreation}/>
       </>
      )
}