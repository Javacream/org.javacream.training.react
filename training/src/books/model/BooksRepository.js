import Book  from "./Book"
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
        console.log(isbn)
        let newBook = new Book(isbn, title, price, available)
        this.books.set(isbn, newBook)
        return newBook
    }
    findByIsbn = (isbn) => this.books.get(isbn)
    findAll = () => Array.from(this.books.values())
    updatePrice = (isbn, price) => this.findByIsbn(isbn).price = price
    deleteByIsbn = (isbn) => delete this.books.isbn


}