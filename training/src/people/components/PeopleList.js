import {peopleModel, whiteboard} from '../PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleList(){
    //peopleList: Typ: Liste von Personen-Informtaionen
    let peopleList = peopleModel.allPeople()
    let peopleHtmlList = peopleList.map((person) => <PersonComponent key={person.id} person={person} />)
    whiteboard.personCreated.subscribe((data) => console.log(data))
    return (
        <>
            <ul>{peopleHtmlList}</ul>
        </>
    )
}