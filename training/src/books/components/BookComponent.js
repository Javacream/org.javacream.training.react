import { booksController } from "../ApplicationContext"

export default function BookComponent(props){
    const book = props.bookAttribute
    const showDelete = props.showDelete
    if (book && !showDelete){
        return (
            <div><p >{book.isbn} {book.title} {book.price} {book.available?'available': 'unavailable'}</p></div>
            )
    }
    if (book && showDelete){
        
        return (
            <div>{book.isbn} {book.title} {book.price} {book.available?'available': 'unavailable'}<button onClick = {() => booksController.deleteByIsbn(book.isbn)}>Delete</button> </div>
            )
    }
    else{
        return <p>No Book</p>
    }
    
}