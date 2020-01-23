import React from 'react';
import {people} from '../ApplicationContent'
import PeopleListComponent from '../people/component/PeopleListComponent'
import PeopleServerListComponent from '../people/component/PeopleServerListComponent'
import './Content.css'
import { PureComponent } from 'react';
import {Person} from '../people/model/People'
class Content extends PureComponent<{}, {people:Array<Person>}> {
    init = () => {
        setTimeout(this.change, 4000);
        return {people}
    }
    change = () => {
        people[1].firstname = "CHANGED BY ContentComponent"
        this.setState({people:Object.assign([], people)})
    }
    readonly state = this.init()
    render(){
        return <><PeopleListComponent people={this.state.people}></PeopleListComponent><hr /><PeopleServerListComponent /></>;
    }
}

export default Content; 