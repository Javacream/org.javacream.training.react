export default function PersonComponent(props){
    let aPerson = props.person_param
    return (
        <>
            <p>{aPerson.firstname} {aPerson.lastname} {aPerson.height}</p>
        </>
    )
}