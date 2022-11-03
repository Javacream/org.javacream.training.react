import { peopleModel, whiteboard} from "../PeopleApplicationContext"
import { useState } from "react"

export default function DeletePersonComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        peopleModel.deleteById(id)
        whiteboard.personDeleted.next(id)
        
    }

    //Hinweis: statt mehrerer State-Variablen könnten wir hier auch ein Personen-Objekt nutzen
    const [id, setId] = useState("");
        return (
            <>  
            <form onSubmit={handleSubmit}>
                <label>Id:
                <input
                    type="text" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                </label>
                <input type="submit" />
            </form>
        </>
        )
}