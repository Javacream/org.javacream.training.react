import { booksController } from "../ApplicationContext"
import { useState } from "react"
export default function BookDeleteComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        booksController.deleteByIsbn(isbn)
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