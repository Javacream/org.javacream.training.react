import Book  from "./Book"
import { whiteboard } from "../ApplicationContext"
export default class BooksRepository{

    constructor(initial){
        this.books = new Map()
        for (let i = 1000; i < 1005; i++){
            const isbn = "ISBN" + i
            this.books.set(isbn, new Book(isbn, "Title"+i, 9.99*i, true))
        }
        this.counter = initial
    }

    create = (title, price, available) => {
        let isbn = "ISBN" + this.counter++
        let newBook = new Book(isbn, title, price, available)
        this.books.set(isbn, newBook)
        whiteboard.create.next("Created Book " + newBook.info())
        return newBook
    }
    findByIsbn = (isbn) => {
        whiteboard.search.next("Searched Book by Isbn "  + isbn)
        return this.books.get(isbn)
    }
    findAll = () => Array.from(this.books.values())
    updatePrice = (isbn, price) => this.findByIsbn(isbn).price = price
    deleteByIsbn = (isbn) => delete this.books.isbn


}