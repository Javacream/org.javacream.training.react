import { useState } from "react"
import PersonComponent from "./components/PersonComponent"
import { baseUrl } from "./PeopleApplicationContext"
export default function PersonServerSearch() {
    const handleSubmit = (event) => {
            event.preventDefault()
            const doRequest = async () =>{
                console.log()
                const response = await fetch(`${baseUrl}/${id}`)
                const person = await response.json()
                updatePerson(person)
            }
            doRequest()
    }
    const [id, setId] = useState("");
    const [person, updatePerson] = useState();
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
            <PersonComponent person={person} />            
        </>
        )
}