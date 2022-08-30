import {booksRepository} from "../ApplicationContext"
import BookComponent from "./BookComponent"
export default function BooksListComponent() {
    const books = booksRepository.findAll()
    const booksHtml = books.map((book) => <BookComponent key={book.isbn} book={book} />)
    return (
        <>{booksHtml}</>
    )
}
