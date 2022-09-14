import BookCreateComponent from "./BookCreateComponent";
import BookSearchComponent from "./BookSearchComponent";
import BooksList from "./BooksList";
import NavigationComponent from "./NavigationComponent";
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router'
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <NavigationComponent></NavigationComponent>
            <Routes>
                <Route path='/list' element={<BooksList></BooksList>}></Route>
                <Route path='/search' element={<BookSearchComponent></BookSearchComponent>}></Route>
                <Route path='/create' element={<BookCreateComponent></BookCreateComponent>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}