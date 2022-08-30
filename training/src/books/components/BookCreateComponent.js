import { booksRepository } from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { useState } from "react"
import { whiteboard } from "../ApplicationContext"
export default function BooksCreateComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        const book = booksRepository.create(title, 9.99, false)
        setBook(book)
        whiteboard.create.next("Created Book " + book.info())
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
