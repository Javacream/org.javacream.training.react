import BooksRepository from "./model/BooksRepository";
import {BehaviorSubject} from 'rxjs'
const booksRepository = new BooksRepository(42)
const defaultUser = {lastname: "Mustermann", firstname:"Hans"}
const whiteboard = {
    create: new BehaviorSubject("no log")
}
export {booksRepository, defaultUser, whiteboard}