export default function PersonComponent(props){
    let aPerson = props.person_param
    let detail = props.detail
    if (detail) {
        return (
            <>
                <div>{aPerson.firstname} {aPerson.lastname} {aPerson.height} {aPerson.gender}</div>
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