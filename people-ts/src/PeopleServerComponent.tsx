import React, { PureComponent } from 'react';
import {Person} from './model/People'
import {PeopleController} from './controller/PeopleController'
import {Link, Switch, Route} from 'react-router-dom'
import {PersonInputFormComponent} from './PersonInputFormComponent'
import {PersonComponent} from './PersonComponent'

class PeopleServerComponent extends PureComponent<{}, {people: Array<Person>}>{
  peopleController = new PeopleController()
  state = {
    people: [],
  };

  async componentDidMount(){
    let peopleList:Array<Person> = await this.peopleController.loadData()
    this.setState({people: peopleList})
  }

  render(){
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

  return (
          <div>
            <Link to="/peopleServer/list">People List</Link>
            <Switch>
              <Route path="/peopleServer/list" render={peopleHtmlRenderer} />
            </Switch>
          </div>
  )
}
}

export {PeopleServerComponent}