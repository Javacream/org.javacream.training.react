import { peopleModel} from "../PeopleApplicationContext"
import { useState } from "react"

export default function CreatePersonComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(lastname)
    }
    const [lastname, setLastname] = useState("");
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
                <input type="submit" />
            </form>
        </>
        )
}