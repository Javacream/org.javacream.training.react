import React, { PureComponent } from 'react';
import {Person, peopleModel, PersonClass} from './model/People'
import {Link, Switch, Route} from 'react-router-dom'
import {PersonInputFormComponent} from './PersonInputFormComponent'
import {PersonInfoComponent} from './PersonInfoComponent'
import {PersonComponent} from './PersonComponent'

class PeopleComponent extends PureComponent<{}, {people: Array<Person>}>{
  state = {
    people: [],
  };

  componentDidMount(){
    this.setState({people: peopleModel.people()})
  }

  handleCreatePerson = (personData:{data: {lastname:string, firstname:string}}) => {
    let person = new PersonClass(Math.floor(Math.random() * 100001), personData.data.lastname, personData.data.firstname)
    peopleModel.add(person)
    this.changeState()
  }
  changeState(){
    this.setState({people:peopleModel.people()})
  }
  render(){
    let peopleInfoHtml = this.state.people.map((p:PersonClass) =>
    <PersonInfoComponent key={p.id} person_info={p.info()} />)

    let peopleHtml = this.state.people.map((p:Person) =>
    <PersonComponent key={p.id} person={p}/>)

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