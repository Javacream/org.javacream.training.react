import BookCreateComponent from "./BookCreateComponent";
import BookSearchComponent from "./BookSearchComponent";
import BooksList from "./BooksList";

export default function Content(){
    return (
        <>
        <BooksList></BooksList>
        <hr />
        <BookSearchComponent></BookSearchComponent>
        <hr />
        <BookCreateComponent></BookCreateComponent>
        </>
    )
}