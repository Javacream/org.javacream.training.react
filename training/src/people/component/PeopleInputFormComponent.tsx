import React, { Component, FormEvent } from 'react';

type InputFields = {
  lastname: string,
  firstname: string
}
type State = {
  fields: InputFields
}

class PersonInputFormComponent extends Component<{createPersonHandler: any}, {fields: InputFields}>{
  state = {
    fields: {
      lastname: '',
      firstname: ''
    }
  }
  handleFormSubmit = (event:FormEvent) => {
      this.props.createPersonHandler(this.state.fields.lastname, this.state.fields.firstname)
    event.preventDefault();
  }
  handleChange = (event:React.FormEvent<HTMLInputElement>) => {
    let target = event.currentTarget
    let result:any = this.state.fields
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

export default PersonInputFormComponent