import { peopleModel } from "./PeopleContext"
import PersonComponent from "./PersonComponent"
export default function PeopleList(){
    const peopleList = peopleModel.allPeople()
    const peopleHtmlList = peopleList.map((p) => <PersonComponent key={p.id} person={p} detail={true}></PersonComponent>)
    return (
        <>{peopleHtmlList}</>
    )
}