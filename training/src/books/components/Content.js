import BookCreateComponent from "./BookCreateComponent";
import BookSearchComponent from "./BookSearchComponent";
import BooksList from "./BooksList";
import NavigationComponent from "./NavigationComponent";
import {BrowserRouter} from 'react-router-dom'
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <NavigationComponent></NavigationComponent>
            <BooksList></BooksList>
            <hr />
            <BookSearchComponent></BookSearchComponent>
            <hr />
            <BookCreateComponent></BookCreateComponent>
        </BrowserRouter>
        </>
    )
}