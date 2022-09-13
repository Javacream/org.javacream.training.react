import {booksRepository} from "../ApplicationContext"

export default function BooksList(){
    //const booksRepository = new BooksRepository()
    const booksList = booksRepository.findAll()//booksList = Array<Book>
    const booksListHtml = booksList.map((book) => <><p>{book.isbn}</p></>) //booksListHtml = Array<HTML>
    return (
        <>
            <p>BOOKS LIST</p>
            {booksListHtml}
        </>
    )
}