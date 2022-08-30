import BooksRepository from './BooksRepository'
describe ("BooksRepository provides CRUD operations", () => {
    let booksRepository = null
    beforeEach(() => booksRepository = new BooksRepository(0))

    it ("creates a book", () => {
        const title = "TEST"
        const price = 9.99
        const available = true
        let book = booksRepository.create(title, price, available)
        expect(book.isbn).toBe("ISBN0")
        expect(book.title).toBe(title)
        expect(book.price).toBe(price)
        expect(book.available).toBe(available)
    })
    it ("finds a created book", () => {
        const title = "TEST"
        const price = 9.99
        const available = true
        booksRepository.create(title, price, available)
        let book = booksRepository.findByIsbn("ISBN0")
        expect(book.title).toBe(title)
        expect(book.price).toBe(price)
        expect(book.available).toBe(available)
    })

    it ("deletes a created book", () => {
        const title = "TEST"
        const price = 9.99
        const available = true
        let book = booksRepository.create(title, price, available)
        booksRepository.deleteByIsbn(book.isbn)
    })

}
)