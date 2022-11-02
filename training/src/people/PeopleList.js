import {peopleModel} from './PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleList(){
    //peopleList: Typ: Liste von Personen-Informtaionen
    let peopleList = peopleModel.people
    let peopleHtmlList = peopleList.map((person) => <PersonComponent key={person.id} person={person} />)

    return (
        <>
            <ul>{peopleHtmlList}</ul>
        </>
    )
}