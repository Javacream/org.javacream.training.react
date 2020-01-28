import React, {PureComponent} from 'react';
import './Content.css'
import {peopleList} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import { Person } from '../people/model/People';
class Content extends PureComponent<{}, {people: Array<Person>}>{
    state = {people: peopleList}
    render(){
        return (
            <div className="content"><PeopleListComponent people={this.state.people} /></div>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            console.log("setting new state")
            this.setState({people: [...peopleList]})
        }, 4000)
    }

}

export default Content