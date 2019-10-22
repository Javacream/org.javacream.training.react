import React, { PureComponent} from 'react';
import {Person} from '../model/People'
import {Link, Switch, Route} from 'react-router-dom'
import {PersonComponent} from './PersonComponent'
import {peopleController, notificationBus} from '../ApplicationContext'
class PeopleServerComponent extends PureComponent<{}, {people: Array<Person>}>{
  subscription: number = 0
  state = {
    people: [],
  };

  async componentDidMount(){
    let peopleList:Array<Person> = await peopleController.loadData()
    this.setState({people: peopleList})
    this.subscription = notificationBus.subscribe("controller", function(topic:any, data:any){
      console.log(`topic=${topic}, data=${data}`)
    })
    notificationBus.publish('controller', "Hello")

  }

  componentWillUnmount() {
    notificationBus.unsubscribe(this.subscription)
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