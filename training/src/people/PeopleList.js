import { peopleModel } from "./PeopleContext"
export default function PeopleList(){
    const peopleList = peopleModel.allPeople()
    const peopleHtmlList = peopleList.map((person) => <p key={person.id}>{person.lastname}</p>)
    return (
        <>{peopleHtmlList}</>
    )
}