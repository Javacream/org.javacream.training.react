import { peopleModel } from "../PeopleContext"

export default function PersonComponent(props){
    let aPerson = props.person
    let detail = props.detail
    if (detail) {
        return (
            <>
                <div>{aPerson.firstname} {aPerson.lastname} {aPerson.height} {aPerson.gender}</div>
                <button onClick={() => peopleModel.delete_by(aPerson.id)}> Delete</button>
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