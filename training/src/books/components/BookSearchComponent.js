import { booksRepository } from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { useState } from "react"
export default function BooksSearchComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        setBook(booksRepository.findByIsbn(isbn))
    }
    const [isbn, setIsbn] = useState("");
    const [book, setBook] = useState(null);
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
            <BookComponent book={book} />
        </>
        )
}
