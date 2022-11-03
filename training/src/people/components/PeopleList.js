import PersonComponent from './PersonComponent'
export default function PeopleList(props){
    //peopleList: Typ: Liste von Personen-Informaionen
    let peopleList = props.people
    let peopleHtmlList = peopleList.map((person) => <PersonComponent key={person.id} person={person} />)

    return (
        <>
            <ul>{peopleHtmlList}</ul>
        </>
    )
}