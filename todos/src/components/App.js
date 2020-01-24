import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ClearTodoList from '../containers/ClearTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <ClearTodoList />
    <Footer />
  </div>
)

export default App
