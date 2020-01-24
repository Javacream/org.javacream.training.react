import React from 'react'
import { connect } from 'react-redux'
import { clearTodoList } from '../actions'

let ClearTodoList = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(clearTodoList())
      }}>
        <button type="submit">
          Clear Todo
        </button>
      </form>
    </div>
  )
}
ClearTodoList = connect()(ClearTodoList)

export default ClearTodoList
