import {peopleModel} from './PeopleApplicationContext'
export default function PeopleList(){
    //peopleList: Typ: Liste von Personen-Informtaionen
    let peopleList = peopleModel.people
    let peopleHtmlList = peopleList.map((person) => <p key={person.id}>{person.lastname}</p>)

    return (
        <>
            {peopleHtmlList}
        </>
    )
}