import React, {useState} from 'react';
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputComponent'
import {peopleModel} from '../ApplicationContext'

export default function ContentComponent() {

    const [data, updatePeople] = useState({people:peopleModel.findAll()})
    const handlePersonCreation = (lastname:string, firstname:string, gender:string, height:number) =>{
          peopleModel.create(lastname, firstname, gender, height)
          updatePeople({people: peopleModel.findAll()})
    }
    return  (
      <div id="content">
          <PeopleListComponent people={data.people}/>
          <hr />
          <PersonInputFormComponent callback={handlePersonCreation}/>
      </div>
      )
    }


