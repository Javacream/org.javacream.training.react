import React from 'react';

class PersonInputFormComponent extends React.Component{
  state = {
    fields: {
      lastname: '',
      firstname: ''
    }
  }
  handleFormSubmit = (event) => {
      //TODO: Insert new Person using input values...
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