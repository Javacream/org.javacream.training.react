import {peopleModel} from '../PeopleContext'
import PersonComponent from './PersonComponent'
export default function PeopleList(){
    const peopleList = peopleModel.allPeople()
    const peopleHtmlList = peopleList.map((p) => <li><PersonComponent key={p.id} person={p} detail={true}/></li>)
    return (
        <ul>
            {peopleHtmlList}
        </ul>
    )
}