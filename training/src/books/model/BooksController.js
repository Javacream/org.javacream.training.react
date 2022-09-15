import {config, whiteboard} from '../ApplicationContext'
export default class BooksController{
    baseUrl = config.baseUrl
    findAll = async () => {
        const response = await fetch(this.baseUrl)
        const booksList = await response.json()
        return booksList
    }

    findByIsbn = async (isbn) => {
        const response = await fetch(`${this.baseUrl}/${isbn}`)
        const book = await response.json()
        whiteboard.bookSearch.next(`search using isbn ${isbn} found book ${book?book.isbn:'no result'}`)
        return book
    }

    create = async (title) => {
        let response = await fetch(`${this.baseUrl}/${title}`, {method: 'POST'})
        const isbn = await response.text()
        whiteboard.bookCreation.next(`created using title ${title} created isbn ${isbn}`)
        response = await fetch(`${this.baseUrl}/${isbn}`)
        const book = await response.json()
        return book
    }

    deleteByIsbn = async (isbn) => {
        await fetch(`${this.baseUrl}/${isbn}`, {method: 'DELETE'})
        whiteboard.bookDeletion.next(`delete using isbn ${isbn}`)
    }



}