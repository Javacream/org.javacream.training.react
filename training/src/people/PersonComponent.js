export default function PersonComponent(props){
    let person = props.person
    return (
        <><p> Lastname: {person.lastname}</p></>
    )
}