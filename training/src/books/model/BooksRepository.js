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
        return newBook
    }

    findAll(){
        return Array.from(this.books.values())
    }

    findByIsbn(isbn){
        return this.books.get(isbn)
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