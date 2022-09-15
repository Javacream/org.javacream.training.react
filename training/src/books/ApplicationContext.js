import {Subject, from} from 'rxjs'
import getDefaultProfile from "./people/model/ProfileController";
import BooksController from "./model/BooksController";

const config = {appTitle: "BOOKS APPLICATION", company: "©Javacream", baseUrl: "http://h2908727.stratoserver.net:8080/api/books"}

const booksController = new BooksController()

const whiteboard = {
    bookCreation: new Subject(),
    bookSearch: new Subject(),
    bookDeletion: new Subject(),
    profileChanged: from(getDefaultProfile())
}
const log = new Subject()
whiteboard.bookCreation.subscribe((message) => log.next(message))
whiteboard.bookSearch.subscribe((message) => log.next(message))
whiteboard.bookDeletion.subscribe((message) => log.next(message))
whiteboard.log = log
export {config, whiteboard, booksController}
