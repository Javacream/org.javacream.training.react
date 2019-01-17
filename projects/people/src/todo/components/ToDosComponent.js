import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import {createStore}  from 'redux';
import {addToDo} from '../actions/ToDoActionBuilder'
import {toDoReducer} from '../reducers/ToDoReducer'
import { Provider } from 'react-redux'

let store = createStore(toDoReducer)
class ToDosComponent extends Component{

  render(){
    const renderToDoList = () => {
      return (
          <div>
          <h3>ToDoList</h3>
          </div>
        )
    }
    const renderToDoInput = () => {
      return (
          <div>
          <h3>ToDoInput</h3>
          </div>
        )
    }
    return (
      <Provider store={store}>
            <div>
              <Link to="/todo/list">ToDo List</Link>
              <Link to="/todo/input">ToDo Input</Link>
              <Switch>
                <Route path="/todo/list" render={renderToDoList} />
                <Route path="/todo/input" render={renderToDoInput} />
              </Switch>
            </div>
        </Provider>
    )  }
}

export {ToDosComponent}
