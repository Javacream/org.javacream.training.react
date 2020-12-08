import React from 'react'

type stateType = {
  fields: {
    lastname:string, 
    firstname:string
  }
}
export default class PersonInputFormComponent extends React.PureComponent<{update: (lastname:string, firstname:string) => void}, stateType>{
    state = {
      fields: {
        lastname: '',
        firstname: ''
      }
    }

    handleFormSubmit = (event:any) => {
      event.preventDefault();
      this.props.update(this.state.fields.lastname, this.state.fields.firstname)

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