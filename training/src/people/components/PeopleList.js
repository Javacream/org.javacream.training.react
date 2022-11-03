import { useEffect, useState } from 'react'
import {peopleModel, whiteboard} from '../PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleList(){
    const [peopleList, updateList] = useState(peopleModel.allPeople())
    let peopleHtmlList = peopleList.map((person) => <PersonComponent key={person.id} person={person} />)
    useEffect(() => {
        const createSubscription = whiteboard.personCreated.subscribe((data) => updateList(peopleModel.allPeople()))
        const deleteSubscription = whiteboard.personDeleted.subscribe((data) => updateList(peopleModel.allPeople()))
        return () => {
            createSubscription.unsubscribe()
            deleteSubscription.unsubscribe()
        }
    })
    return (
        <>
            <ul>{peopleHtmlList}</ul>
        </>
    )
}