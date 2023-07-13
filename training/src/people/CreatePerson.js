import {useState} from 'react'

export default function CreatePerson(){
    const [lastname, updateLastname] = useState("") //useState ist "memoized" -> Hooks bitte niemals z.B. in einer if-else mal ausführen, mal nicht
    const handleSubmit = (event) => {
        event.preventDefault() //-> Single Page Application
        console.log(lastname)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Lastname
                    <input type = "text" value={lastname} onChange={(e) => {updateLastname(e.target.value); console.log(lastname)}}></input>
                </label>
            </form>
        </>
    )
}