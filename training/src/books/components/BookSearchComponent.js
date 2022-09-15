import { booksController } from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { useState } from "react"
import {from} from 'rxjs' 
export default function BookSearchComponent() {
    const handleSubmit = (event) => {
        event.preventDefault()
        from(booksController.findByIsbn(isbn)).subscribe(book => setBook(book))
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
            <BookComponent bookAttribute={book} />
        </>
        )
}