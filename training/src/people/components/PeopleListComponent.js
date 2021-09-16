import {peopleModel} from '../PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export default function PeopleListComponent(){
    let people = peopleModel.allPeople()
    let peopleHtml = people.map(p => <p key={p.id}><PersonComponent detail={true} person={p} /></p>)
    return (
        <>
        {peopleHtml}
        </>

    )
}