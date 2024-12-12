import { useEffect, useState } from 'react'
import {peopleModel} from '../PeopleContext'
import PersonComponent from './PersonComponent'
import {personDeletion} from '../PeopleContext'

export default function PeopleList(){
    const [peopleList, updatePeopleList] = useState(peopleModel.allPeople())
    useEffect(() => {
        const subscription = personDeletion.subscribe((id) => {
            updatePeopleList(peopleModel.allPeople())
        })
        return () => subscription.unsubscribe()
    }, [])
    const peopleHtmlList = peopleList.map((p) => <li key={p.id}><PersonComponent  person={p} detail={true}/></li>)
    return (
        <ul>
            {peopleHtmlList}
        </ul>
    )
}