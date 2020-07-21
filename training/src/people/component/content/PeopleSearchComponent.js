import React, { Component } from 'react';
class PersonSearchComponent extends Component{
  state = {
    fields: {
      id: ''
    }
  }
  async loadData(id)  {
    const url = `http://localhost:8080/people/${id}`
    let result = await fetch (url)
    let personData = await result.json()
    this.setState({...this.state, ...{person: personData.lastname}})

  }

  handleFormSubmit = (event) => {
    this.loadData(this.state.fields.id)
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
      <input placeholder="Id" name="id" value={this.state.fields.id} onChange={this.handleChange}></input>
      <button onClick={this.handleFormSubmit}>Search</button>
      <p>{this.state.person}</p>
      </>
    )
  }

}

export default PersonSearchComponent 