//import {booksRepository} from "../ApplicationContext"
import BookComponent from "./BookComponent"
import { booksController, whiteboard } from "../ApplicationContext"
import { useEffect, useState } from "react"
import {from} from 'rxjs' 
export default function BooksList(){

    const [booksList, booksListUpdate] = useState()
    useEffect( () => {
        from(booksController.findAll()).subscribe(list => booksListUpdate(list))
        const createSubscription = whiteboard.bookCreation.subscribe((data) => from(booksController.findAll()).subscribe(list => booksListUpdate(list)))
        const deleteSubscription = whiteboard.bookDeletion.subscribe((data) => from(booksController.findAll()).subscribe(list => booksListUpdate(list)))
        return () => {
            createSubscription.unsubscribe()
            deleteSubscription.unsubscribe()
        }
    }, [])
    let booksListHtml = "EMPTY LIST"
    if (booksList) {
        booksListHtml = booksList.map((book) => <BookComponent  key={book.isbn} bookAttribute={book} showDelete={true}></BookComponent>) //booksListHtml = Array<HTML>
    }
    return (
        <>
            <p>BOOKS LIST</p>
            {booksListHtml}
        </>
    )
}