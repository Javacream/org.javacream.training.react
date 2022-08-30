export default function BookComponent(props) {
    if (props.book){
        return (
            <>
            <p>{props.book.info()}</p>
            </>
        )
    }else{
        return <p>No result</p>
    }
}
