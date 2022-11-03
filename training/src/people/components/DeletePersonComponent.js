import { peopleModel} from "../PeopleApplicationContext"
import { useState } from "react"

export default function DeletePersonComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        peopleModel.deleteById(id)
        //CHECK: Die Personen sind schon angekommen, aber die Liste wird trotzdem nicht aktualisiert -> morgen
        console.log(peopleModel.allPeople())
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