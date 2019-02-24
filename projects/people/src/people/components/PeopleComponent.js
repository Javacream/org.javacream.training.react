import React, { Component } from 'react';
import {peopleModel} from '../model/PeopleApp'
import {Person} from '../model/People'
import {Link, Switch, Route} from 'react-router-dom'
import {PersonInputFormComponent} from './PersonInputFormComponent'
import {PersonInfoComponent} from './PersonInfoComponent'
import {PersonComponent} from './PersonComponent'

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

  handleCreatePerson = (personData) => {
    let person = new Person(Math.floor(Math.random() * 100001), personData.data.lastname, personData.data.firstname)
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

export {PeopleComponent}
