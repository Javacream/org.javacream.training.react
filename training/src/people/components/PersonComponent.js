export default function PersonComponent(props){
    let person = props.person
    return (
        <>
          <li>{person.firstname} {person.lastname}</li>  
        </>
    )

}