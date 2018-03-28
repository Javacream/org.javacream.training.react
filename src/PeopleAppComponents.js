import React, { Component } from 'react';
import {peopleModel} from './PeopleApp'
import {Person} from './People'
import {Link, Switch, Route} from 'react-router-dom'

class WelcomeComponent extends Component{
  render(){
    return <h2>Welcome to the People App!</h2>
  }
}

class PeopleComponent extends Component{
  state = {
    people: [],
  };

  componentDidMount(){
    this.setState({people: peopleModel.people()})
  }

  handleNameChange = (clickedPerson) => {
    let person = peopleModel.personOf(clickedPerson)
    person.lastname = person.lastname + "A"
    this.changeState()
  }

  handleCreatePerson = (person) => {
    peopleModel.add(person)
    this.changeState()
  }
  changeState(){
    this.setState({people:peopleModel.people()})
  }
  render(){
    let peopleInfoHtml = this.state.people.map((p) =>
    <PersonInfoComponent key={p.personId} info={p.info()} />)

    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent key={p.personId} index={p.personId} lastname={p.lastname} firstname={p.firstname} married={p.partner ? true : false} handleNameChange={this.handleNameChange}/>)

    let peopleHtmlRenderer = () => {
      return (
          <div>
            <h3>People</h3>
            <div><ol>{peopleHtml}</ol></div>
          </div>
        )
    }
    let peopleHtmlInfoRenderer = () => {
      return (
          <div>
          <h3>People Info</h3>
          <div><ul>{peopleInfoHtml}</ul></div>
          </div>
        )
    }

    let personFormRenderer = () => {
      return (
          <div>
          <h3>Person Input</h3>
          <div><PersonInputFormComponent createPersonHandler={this.handleCreatePerson} /></div>
          </div>
        )
    }

  return (
          <div>
            <Link to="/people/list">People List</Link>
            <Link to="/people/info">People Info</Link>
            <Link to="/people/personInput">Person Input</Link>
            <Switch>
              <Route path="/people/list" render={peopleHtmlRenderer} />
              <Route path="/people/info" render={peopleHtmlInfoRenderer} />
              <Route exact path='/people/personInput' render={personFormRenderer}/>
            </Switch>
          </div>
  )
}
}


const PersonInfoComponent = (props) => {
    return <li>{props.info}</li>
}

const PersonComponent = (props) => {

    const handleNameChange = () => {
      props.handleNameChange(props.index)
    }

    return (
      <li>
        <p>Lastname: {props.lastname}</p>
        <p>Firstname: {props.firstname}</p>
        <p>Married: <input type="checkbox" value="Married" checked={props.married} readOnly="true"></input></p>
        <p><input type="button" value="Change name!" onClick={handleNameChange}></input></p>
      </li>
  )
}

class PersonInputFormComponent extends Component{
  state = {
    fields: {
      lastname: '',
      firstname: ''
    }
  }
  handleFormSubmit = (event) => {
    let p = new Person(Math.floor(Math.random() * 100000), this.state.fields.lastname, this.state.fields.firstname)
    alert("Created " + p.info())
    this.props.createPersonHandler(p)

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

export {PeopleComponent, WelcomeComponent, PersonInputFormComponent}
