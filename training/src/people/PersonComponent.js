export default function PersonComponent(props){
    let person = props.person
    if (props.detail){
        return (
            <><p>Person: id={person.id}, lastname={person.lastname}, firstname={person.firstname}, height={person.height}, gender={person.gender}</p></>
        )}
        else{
            return (<><p>{person.firstname} {person.lastname}</p></>)
        }
    
    }
