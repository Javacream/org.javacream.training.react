import { useState } from "react";

export default function CreatePerson(){
    const [lastname, updateLastname] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault() //SPA
        console.log('you entered: '+ lastname)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Lastname:
                    <input type='text' value={lastname} onChange={(e) =>
                    {
                        updateLastname(e.target.value)
                    }
                } />
                </label>
                <input type='submit' value='create' />
            </form>
        </>
    )
}