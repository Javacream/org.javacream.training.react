import Book from "./model/Book";
import BooksRepository from "./model/BooksRepository";
import {Subject} from 'rxjs'
import getDefaultProfile from "./people/model/ProfileController";


const booksRepository = new BooksRepository()

for (let i = 1000; i < 1005; i++){
    const isbn = "ISBN" + i
    const title = "TITLE" + i
    const price = 1.99 + i
    const available = true
    booksRepository.books.set(isbn, new Book(isbn, title, price, available))


}
const profile = getDefaultProfile()
const config = {appTitle: "BOOKS APPLICATION", company: "©Javacream", profile}
const whiteboard = {
    bookCreation: new Subject(),
    bookSearch: new Subject(),
    bookDeletion: new Subject()
}
const log = new Subject()
whiteboard.bookCreation.subscribe((message) => log.next(message))
whiteboard.bookSearch.subscribe((message) => log.next(message))
whiteboard.bookDeletion.subscribe((message) => log.next(message))
whiteboard.log = log
export {booksRepository, config, whiteboard}
