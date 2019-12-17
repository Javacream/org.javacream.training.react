import React, { Component } from 'react';
class PersonInputFormComponent extends Component{
    state = {
    fields: {
      lastname: '',
      firstname: '',
      gender: '',
      height: 0
    }
  }
  handleFormSubmit = (event) => {
    this.props.createPersonHandler(this.state.fields);
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
      <>
      <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
      <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
      <input placeholder="m|f|x" name="gender" value={this.state.fields.gender} onChange={this.handleChange}></input>
      <input placeholder="123" name="height" value={this.state.fields.height} onChange={this.handleChange}></input>
      <input type="submit" value="Save" onClick={this.handleFormSubmit}></input>
      </>
    )
  }

}

export default PersonInputFormComponent