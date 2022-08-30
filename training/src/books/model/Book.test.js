import Book from './Book'
it ("shows books are immutable", () => {
    let changeTitle = (book) => {
        book.title = "CHANGED"
    }
    let b = new Book("i", "t", 9, true)
    expect(() => changeTitle(b)).toThrow()
})