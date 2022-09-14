import { whiteboard } from '../ApplicationContext'
import Book from './Book'
export default class BooksRepository{
    constructor(){
        this.books = new Map()
        this.counter = 0
    }

    create(title){
        const isbn = "ISBN" + this.counter++
        const newBook = new Book(isbn, title, 19.99, false)
        this.books.set(isbn, newBook)
        whiteboard.bookCreation.next(newBook.info())
        return newBook
    }

    findAll(){
        return Array.from(this.books.values())
    }

    findByIsbn(isbn){
        const book = this.books.get(isbn)
        whiteboard.bookSearch.next(`search using isbn ${isbn} found book ${book?book.info():'no result'}`)
        return book
    }

    updatePrice(isbn, newPrice){
        this.books.get(isbn).price = newPrice
    }
    updateAvailability(isbn, available){
        this.books.get(isbn).available = available
    }
    deleteByIsbn(isbn){
        this.books.delete(isbn)
    }
}