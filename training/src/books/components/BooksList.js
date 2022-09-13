import booksRepository from "../ApplicationContext"

export default function BooksList(){
    //const booksRepository = new BooksRepository()
    const booksList = booksRepository.findAll()
    return (
        <><p>BOOKS LIST</p></>
    )
}