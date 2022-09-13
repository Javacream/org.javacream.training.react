import Book from "./model/Book";
import BooksRepository from "./model/BooksRepository";

const booksRepository = new BooksRepository()

for (let i = 1000; i < 1005; i++){
    const isbn = "ISBN" + i
    const title = "TITLE" + i
    const price = 1.99 * i
    const available = true
    booksRepository.books.set(isbn, new Book(isbn, title, price, available))

}
export {booksRepository}