//import {booksRepository} from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { booksRepository } from "../ApplicationContext"
export default function BooksList(){
    //const booksRepository = new BooksRepository()
    const booksList = booksRepository.findAll()//booksList = Array<Book>
    const booksListHtml = booksList.map((book) => <BookComponent  key={book.isbn} bookAttribute={book}></BookComponent>) //booksListHtml = Array<HTML>
    return (
        <>
            <p>BOOKS LIST</p>
            {booksListHtml}
        </>
    )
}