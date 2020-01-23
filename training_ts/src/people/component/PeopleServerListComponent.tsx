import React, { PureComponent} from 'react';
import {Person} from '../model/People'
import PersonComponent from '../component/PersonComponent'
import {peopleController} from '../../ApplicationContent'

export default class PeopleServerComponent extends PureComponent<{}, {people: Array<Person>}>{
    state = {
        people: [],
      };
    async componentDidMount(){
        let peopleList:Array<Person> = await peopleController.loadData()
        this.setState({people: peopleList})
      }
    
      render(){
        let peopleHtmlElements = this.state.people.map((p:Person) =>
        <PersonComponent key={p.id} person={p} detail={true} className="content"/>)
    
        return (
            <div className="content">
            <h3>List of server people</h3>
            <ul>{peopleHtmlElements}</ul>
        </div>
        );
    }
}