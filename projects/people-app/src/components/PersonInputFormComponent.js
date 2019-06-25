import React from 'react';
import { context } from '../Context';

class PersonInputFormComponent extends React.Component{
  state = {
    fields: {
      lastname: '',
      firstname: ''
    }
  }
  handleFormSubmit = (event) => {
        let lastname = this.state.fields.lastname
        let firstname = this.state.fields.firstname
        context.peopleModel.add(lastname, firstname)
        if (context.peopleComponent){
            context.peopleComponent.setState({people:context.peopleModel.people()})
        }
      event.preventDefault();
  }
  handleChange = (event) => {
    let target = event.target
    let result = this.state.fields
    result[target.name] = target.value
    this.setState({fields: result})
  }
  render(){
    return (
      <form onSubmit={this.handleFormSubmit}>
      <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
      <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
      <input type="submit" value="Create Person"/>
      </form>
    )
  }

}

export {PersonInputFormComponent}