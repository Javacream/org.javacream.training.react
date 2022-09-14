//import {booksRepository} from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { booksRepository, whiteboard } from "../ApplicationContext"
import { useEffect, useState } from "react"
export default function BooksList(){
    //const booksRepository = new BooksRepository()
    const [booksList, booksListUpdate] = useState(booksRepository.findAll())
    useEffect( () => {
        const createSubscription = whiteboard.bookCreation.subscribe((data) => booksListUpdate(booksRepository.findAll()))
        const deleteSubscription = whiteboard.bookDeletion.subscribe((data) => booksListUpdate(booksRepository.findAll()))
        return () => {
            createSubscription.unsubscribe()
            deleteSubscription.unsubscribe()
        }
    }, [])

    const booksListHtml = booksList.map((book) => <BookComponent  key={book.isbn} bookAttribute={book} showDelete={true}></BookComponent>) //booksListHtml = Array<HTML>
    return (
        <>
            <p>BOOKS LIST</p>
            {booksListHtml}
        </>
    )
}