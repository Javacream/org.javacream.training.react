import { peopleModel, whiteboard} from "../PeopleApplicationContext"
import { useState } from "react"
import PersonComponent from "./PersonComponent"

export default function CreatePersonComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        const person = peopleModel.create(lastname, firstname, 177, 'd')
        setPerson(person)
        whiteboard.personCreated.next(person)
    }

    //Hinweis: statt mehrerer State-Variablen könnten wir hier auch ein Personen-Objekt nutzen
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [person, setPerson] = useState({});
        return (
            <>  
            <form onSubmit={handleSubmit}>
                <label>Lastname:
                <input
                    type="text" 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                </label>
                <label>Firstname:
                <input
                    type="text" 
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                </label>
                <input type="submit" />
            </form>
            <PersonComponent person={person} />
        </>
        )
}