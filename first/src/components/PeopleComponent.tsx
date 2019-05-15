import React, { PureComponent } from 'react';
import {Person, applicationContext} from '../context/ApplicationContext'
import PersonComponent from './PersonComponent'
export default class PeopleComponent extends PureComponent<{}, {people: Array<Person>}>{
    state = {
      people: [],
    };
  
    componentDidMount(){
      this.setState({people: applicationContext.samplePeople})
    }
    render(){
        let peopleHtml = this.state.people.map((p:Person) =>
        <PersonComponent key={p.id} person={p}/>)
    
        
          return (
              <div>
                <h3>People</h3>
                <div><ol>{peopleHtml}</ol></div>
              </div>
            )
          }
}