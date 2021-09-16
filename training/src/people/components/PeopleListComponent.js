import PersonComponent from './PersonComponent'
export default function PeopleListComponent(props){
    let people = props.people
    let peopleHtml = people.map(p => <p key={p.id}><PersonComponent detail={true} person={p} /></p>)
    return (
        <>
        {peopleHtml}
        </>

    )
}