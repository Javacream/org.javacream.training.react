export default function BookComponent(props){
    const book = props.bookAttribute
    return (
        <div><p >{book.isbn} {book.title}</p></div>
    )
}