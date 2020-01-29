import React, {PureComponent} from 'react';
import './Content.css'
import {peopleModel} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import { Person} from '../people/model/People';
import PeopleInputFormComponent from '../people/component/PeopleInputFormComponent'
import PeopleServerListComponent from '../people/component/PeopleServerListComponent'
import PeopleServerSearchFormComponent from '../people/component/PeopleServerSearchFormComponent'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'

class Content extends PureComponent<{}, {people: Array<Person>}>{
    state = {people: peopleModel.people()}
    render(){
        return (
        <BrowserRouter>
            <Link to="/people/list">People List</Link>
            <Link to="/people/create">Person create</Link>
            <Link to="/people/server">People List from Server </Link>
            <Link to="/people/search">People Search from Server </Link>
            <Switch>
              <Route path="/people/list" render={() => (<PeopleListComponent people={this.state.people} deletePersonHandler={this.handleDeletePerson}></PeopleListComponent>)} />
              <Route path="/people/create" render={() => (<PeopleInputFormComponent createPersonHandler={this.createPerson} ></PeopleInputFormComponent>)} />
              <Route exact path='/people/server' component={PeopleServerListComponent}/>
              <Route exact path='/people/search' component={PeopleServerSearchFormComponent}/>
            </Switch>
        </BrowserRouter>)
    }
    /*
    componentDidMount(){
        setTimeout(() => {
            this.setState({people: [...peopleModel.people()]})
        }, 4000)
    }*/

    createPerson = (lastname: string, firstname:string) => {
        peopleModel.add(lastname, firstname);
        this.changeState();
    }
    handleDeletePerson = (id: number) => {
        peopleModel.remove(id)
        this.changeState();
    }  
    changeState = () =>{
        this.setState({people:peopleModel.people()})
    }
}

export default Content