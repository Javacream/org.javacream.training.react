import { useEffect, useState } from "react"
import { peopleModel, whiteboard } from "./PeopleContext"

import PersonComponent from "./PersonComponent"
export default function PeopleList(){
    const [peopleList, updatePeople] = useState(peopleModel.allPeople())
    let peopleHtmlList = peopleList.map((p) => <PersonComponent key={p.id} person={p} detail={true}></PersonComponent>)
    useEffect(() => {
        const createSubscription = whiteboard.personCreation.subscribe((p) => updatePeople([...peopleModel.allPeople()]))
        return () => createSubscription.unsubscribe()
    }, [])

    return (
        <>{peopleHtmlList}</>
    )
}