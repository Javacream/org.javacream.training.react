import { useState } from "react";
import BookCreateComponent from "./BookCreateComponent";
import BookSearchComponent from "./BookSearchComponent";
import BooksList from "./BooksList";
import {booksRepository} from "../ApplicationContext"
export default function Content(){
    const [booksList, updateBooksList] = useState(booksRepository.findAll())
    const bookCreated = () => updateBooksList(booksRepository.findAll())
    return (
        <>
        <BooksList booksList={booksList}></BooksList>
        <hr />
        <BookSearchComponent></BookSearchComponent>
        <hr />
        <BookCreateComponent bookCreated={bookCreated}></BookCreateComponent>
        </>
    )
}