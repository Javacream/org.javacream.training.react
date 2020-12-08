import React from 'react'


export default class PersonInputFormComponent extends React.PureComponent{
    state = {
      fields: {
        lastname: '',
        firstname: ''
      }
    }

    handleFormSubmit = (event:any) => {
      event.preventDefault();

    }
    handleChange = (event:any) => {
      let target = event.target
      let result:any = this.state.fields
      result[target.name] = target.value
      this.setState(result)
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