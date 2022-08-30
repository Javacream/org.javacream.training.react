import Book  from "./Book"
export default class BooksRepository{
    constructor(initial){
        this.books = new Map()
        this.counter = initial
    }

    create = (title, price, available) => {
        let isbn = "ISBN" + this.counter++
        console.log(isbn)
        let newBook = new Book(isbn, title, price, available)
        this.books[isbn] = newBook
        return newBook
    }
    findByIsbn = (isbn) => this.books[isbn]
    findAll = () => this.books.values()
    updatePrice = (isbn, price) => this.findByIsbn(isbn).price = price
    deleteByIsbn = (isbn) => delete this.books.isbn


}