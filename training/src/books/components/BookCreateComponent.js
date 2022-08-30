import { booksRepository } from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { useState } from "react"
export default function BooksCreateComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        setBook(booksRepository.create(title, 9.99, false))
    }
    const [title, setTitle] = useState("");
    const [book, setBook] = useState(null);
        return (
            <>  
            <form onSubmit={handleSubmit}>
                <label>Title:
                <input
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </label>
                <input type="submit" />
            </form>
            <BookComponent book={book} />
        </>
        )
}
