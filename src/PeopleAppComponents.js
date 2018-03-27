import React, { Component } from 'react';
import {peopleModel} from './PeopleApp'

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

  changeState(){
    this.setState({people:peopleModel.people()})
  }
  render(){
    let peopleInfoHtml = this.state.people.map((p) =>
    <PersonInfoComponent key={p.personId} info={p.info()} />)

    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent key={p.personId} index={p.personId} lastname={p.lastname} firstname={p.firstname} married={p.partner ? true : false} handleNameChange={this.handleNameChange}/>)
  return (
          <div>
            <h3>People</h3>
            <div><ol>{peopleHtml}</ol></div>
            <h3>People Info</h3>
            <div><ul>{peopleInfoHtml}</ul></div>
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

export {PeopleComponent, WelcomeComponent}
