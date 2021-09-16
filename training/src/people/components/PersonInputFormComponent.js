import { Component } from 'react';
import {peopleModel} from '../PeopleApplicationContext'
import PersonListComponent from './PeopleListComponent'
class PersonInputFormComponent extends Component{
  state = {
    fields: {
      lastname: '',
      firstname: '',
      gender: '',
      height: 0
    },
    people: peopleModel.allPeople()
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    peopleModel.create(this.state.fields.lastname, this.state.fields.firstname, this.state.fields.height, this.state.fields.gender)
    this.setState({people: peopleModel.allPeople()})


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
      <form onSubmit={this.handleFormSubmit}>
      <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
      <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
      <input placeholder="m|f|x" name="gender" value={this.state.fields.gender} onChange={this.handleChange}></input>
      <input placeholder="123" name="height" value={this.state.fields.height} onChange={this.handleChange}></input>
      <input type="submit" value="Create Person"/>
      </form>
      <hr />
      <PersonListComponent people={this.state.people} />
      </>
    )
  }

}

export default PersonInputFormComponent 