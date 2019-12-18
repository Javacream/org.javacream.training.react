import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class PersonSearchComponent extends Component{
  state = {
    fields: {
      id: ''
    }
  }
  async loadData(id)  {
    const url = `http://10.12.6.1:8080/people/${id}`
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
      <Button variant="info" onClick={this.handleFormSubmit}>Search</Button>
      <p>{this.state.person}</p>
      </>
    )
  }

}

export default PersonSearchComponent