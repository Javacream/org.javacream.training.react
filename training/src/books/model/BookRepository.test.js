import BooksRepository from "./BooksRepository"

describe('BooksRepository provides CRUD Operations', () => {
    let booksRepository
    beforeEach(() => booksRepository = new BooksRepository())
    it ('creates a book', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        expect(book.title).toBe(TITLE)
    })

    it ('finds a created Book', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        const isbn = book.isbn
        const searchResult = booksRepository.findByIsbn(isbn)
        expect(searchResult.title).toBe(TITLE)
    })
    it ('verifies that a created book is in books list', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        const booksList = booksRepository.findAll()
        expect(booksList).toContain(book)
    })
    it ('deletes a created Book', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        const isbn = book.isbn
        booksRepository.deleteByIsbn(isbn)
        const booksList = booksRepository.findAll()
        expect(booksList).not.toContain(book)
    })
    it ('updates price of a created Book', () => {
        const TITLE = "TEST"
        const PRICE = 39.99
        const book = booksRepository.create(TITLE)
        booksRepository.updatePrice(book.isbn, PRICE)
        const searchResult = booksRepository.findByIsbn(book.isbn)
        expect(searchResult.price).toBe(PRICE)
    })
    it ('updates availability of a created Book', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        booksRepository.updateAvailability(book.isbn, true)
        const searchResult = booksRepository.findByIsbn(book.isbn)
        expect(searchResult.available).toBe(true)
    })

})