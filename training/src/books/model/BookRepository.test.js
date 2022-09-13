import BooksRepository from "./BooksRepository"

describe('BooksRepository provides CRUD Operations', () => {
    let booksRepository
    beforeEach(() => booksRepository = new BooksRepository())
    it ('creates a book', () => {
        const TITLE = "TEST"
        const book = booksRepository.create(TITLE)
        expect(book.title).toBe(TITLE)
    })
})