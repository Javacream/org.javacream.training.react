//import {booksRepository} from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { booksRepository, whiteboard } from "../ApplicationContext"
import { useEffect, useState } from "react"
export default function BooksList(){
    //const booksRepository = new BooksRepository()
    const [booksList, booksListUpdate] = useState(booksRepository.findAll())
    useEffect( () => {
        const subscription = whiteboard.bookCreation.subscribe((data) => booksListUpdate(booksRepository.findAll()))
        return () => subscription.unsubscribe()
    }, [])

    const booksListHtml = booksList.map((book) => <BookComponent  key={book.isbn} bookAttribute={book}></BookComponent>) //booksListHtml = Array<HTML>
    return (
        <>
            <p>BOOKS LIST</p>
            {booksListHtml}
        </>
    )
}