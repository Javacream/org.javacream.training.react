import BooksRepository from "./model/BooksRepository";
import {BehaviorSubject, Subject} from 'rxjs'


const booksRepository = new BooksRepository(42)
const defaultUser = {lastname: "Mustermann", firstname:"Hans"}
const whiteboard = {
    create: new BehaviorSubject("no creation"), 
    search: new BehaviorSubject("no search"),

}
const log = new Subject()
whiteboard.create.subscribe((message => log.next(message)))
whiteboard.search.subscribe((message => log.next(message)))
whiteboard.log = log
export {booksRepository, defaultUser, whiteboard}