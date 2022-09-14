import { booksRepository } from "../ApplicationContext"
import { useState } from "react"
export default function BookDeleteComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        booksRepository.deleteByIsbn(isbn)
    }
    const [isbn, setIsbn] = useState("");
        return (
            <>  
            <form onSubmit={handleSubmit}>
                <label>ISBN:
                <input
                    type="text" 
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                />
                </label>
                <input type="submit" />
            </form>
        </>
        )
}