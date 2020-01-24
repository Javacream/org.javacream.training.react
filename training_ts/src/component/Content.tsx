import React from 'react';
import {peopleModel} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import PeopleServerListComponent from '../people/component/PeopleServerListComponent'
import PersonInputFormComponent from '../people/component/PersonInputFormComponent'
import './Content.css'
import { PureComponent } from 'react';
import {Person, PersonClass} from '../people/model/People'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import {notificationBus} from '../ApplicationContext'


class Content extends PureComponent<{}, {people:Array<Person>}> {
    init = () => {

        setTimeout(this.change, 4000);
        return {people: peopleModel.people()}
    }
    change = () => {
        peopleModel.personOf(815)!.firstname = "CHANGED BY ContentComponent"
        this.setState({people:Object.assign([], peopleModel.people())})
    }
    readonly state = this.init()
    render(){
        return (
        <BrowserRouter>
            <Link to="/people/list">People List</Link>
            <Link to="/people/create">Person create</Link>
            <Link to="/people/server">People List from Server </Link>
            <Switch>
              <Route path="/people/list" render={() => (<PeopleListComponent people={this.state.people} deletePersonHandler={this.handleDeletePerson}></PeopleListComponent>)} />
              <Route path="/people/create" render={() => (<PersonInputFormComponent createPersonHandler={this.handleCreatePerson}></PersonInputFormComponent>)} />
              <Route exact path='/people/server' component={PeopleServerListComponent}/>
            </Switch>
        </BrowserRouter>
        )
    }

    handleCreatePerson = (personData:{data: {lastname:string, firstname:string}}) => {
        let person = new PersonClass(Math.floor(Math.random() * 100001), personData.data.lastname, personData.data.firstname, "f")
        peopleModel.add(person)
        this.changeState()
        notificationBus.publish("log", "added person " + person.info())
      }
    handleDeletePerson = (id: number) => {
        peopleModel.remove(id)
        this.changeState();
        notificationBus.publish("log", "deleted person id=" + id)
    }  
    changeState(){
        this.setState({people:peopleModel.people()})
    }

}

export default Content; 