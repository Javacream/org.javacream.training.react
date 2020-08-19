import React from 'react'
import { connect } from 'react-redux'
import { clearTodos } from '../actions'

let ClearTodos = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(clearTodos())
      }}>
        <button type="submit">
          Clear Todo
        </button>
      </form>
    </div>
  )
}
ClearTodos = connect()(ClearTodos)

export default ClearTodos
