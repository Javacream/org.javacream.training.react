import './BooksContent.css'
import React from 'react';
import NavigationComponent from './NavigationComponent';
import {Routes, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import BooksListComponent from './BooksListComponent';
import BooksSearchComponent from './BookSearchComponent'
import BooksCreateComponent from './BookCreateComponent'
export default function BooksContent() {
    return (
      <>
      <BrowserRouter>
        <NavigationComponent />
        <Routes>
          <Route path='/list' element={<BooksListComponent />} /> 
          <Route path='/create' element={<BooksCreateComponent />}/> 
          <Route path='/search' element={<BooksSearchComponent />}/> 
        </Routes>
      </BrowserRouter>
    </>
    );

  }
  