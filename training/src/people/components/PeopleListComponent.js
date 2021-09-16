import {peopleModel} from '../PeopleApplicationContext'

export default function PeopleListComponent(){
    let people = peopleModel.allPeople()
    let peopleHtml = people.map(person => <p key={person.id}>{person.lastname}</p>)
    return (
        <>
        {peopleHtml}
        </>

    )
}