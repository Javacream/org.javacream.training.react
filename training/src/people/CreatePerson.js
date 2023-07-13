import {useState} from 'react'
import { peopleModel } from './PeopleContext'
import PersonComponent from './PersonComponent'
export default function CreatePerson(){
    const [lastname, updateLastname] = useState("") 
    const [firstname, updateFirstname] = useState("") 
    const [person, updatePerson] = useState({}) 
    const handleSubmit = (event) => {
        event.preventDefault()
        const p = peopleModel.create(lastname, firstname, 177, 'd')
        updatePerson(p)
        console.log(peopleModel.allPeople())
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Lastname:
                    <input type = "text" value={lastname} onChange={(e) => updateLastname(e.target.value)}></input>
                </label>
                <label>Firstname:
                    <input type = "text" value={firstname} onChange={(e) => updateFirstname(e.target.value)}></input>
                </label>
                <input type="submit" value="Create Person"/>
            </form>
            <PersonComponent person={person} detail={true}></PersonComponent>
        </>
    )
}