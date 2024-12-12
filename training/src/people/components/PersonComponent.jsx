export default function PersonComponent(props){
    let aPerson = props.person
    let detail = props.detail
    let handleDelete = props.handleDelete
    if (detail) {
        return (
            <>
                <div>{aPerson.firstname} {aPerson.lastname} {aPerson.height} {aPerson.gender}</div>
                <button onClick={() => handleDelete(aPerson.id)}> Delete</button>
            </>
        )
    }
    else{
        return (
            <>
                <div>{aPerson.firstname} {aPerson.lastname}</div>
            </>
        )

    }
}