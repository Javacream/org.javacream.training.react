import BookCreateComponent from "./BookCreateComponent";
import BookSearchComponent from "./BookSearchComponent";
import BooksList from "./BooksList";
import NavigationComponent from "./NavigationComponent";
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router'
import BookDeleteComponent from "./BookDeleteComponent";
import HomeComponent from "./HomeComponent";
import CounterComponent from "../../demo/redux/components/CounterComponent";
export default function Content(){
    return (
        <>
        <BrowserRouter>
            <NavigationComponent></NavigationComponent>
            <Routes>
                <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
                <Route path='/list' element={<BooksList></BooksList>}></Route>
                <Route path='/search' element={<BookSearchComponent></BookSearchComponent>}></Route>
                <Route path='/create' element={<BookCreateComponent></BookCreateComponent>}></Route>
                <Route path='/delete' element={<BookDeleteComponent></BookDeleteComponent>}></Route>
                <Route path='/redux' element={<CounterComponent></CounterComponent>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}