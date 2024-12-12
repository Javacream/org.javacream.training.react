import { useState } from 'react'
import {peopleModel} from '../PeopleContext'
import PersonComponent from './PersonComponent'
export default function PeopleList(){
    const [peopleList, updatePeopleList] = useState(peopleModel.allPeople())
    let handleDelete = (id) => {
        peopleModel.delete_by(id)
        updatePeopleList(peopleModel.allPeople())
    }
    const peopleHtmlList = peopleList.map((p) => <li key={p.id}><PersonComponent  person={p} detail={true} handleDelete={handleDelete}/></li>)
    return (
        <ul>
            {peopleHtmlList}
        </ul>
    )
}