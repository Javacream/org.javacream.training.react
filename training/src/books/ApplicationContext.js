import BooksRepository from "./model/BooksRepository";

const booksRepository = new BooksRepository(42)
const defaultUser = {lastname: "Mustermann", firstname:"Hans"}
export {booksRepository, defaultUser}