import React, {Component} from 'react';
import {peopleModel, Person} from '../model/People'
import {PersonComponent} from './PersonComponent' 
import {PersonInputFormComponent} from './PersonInputFormComponent' 
import {PeopleServerComponent} from './PeopleServerComponent' 
class PeopleComponent extends Component{
    state = {
        people: [],
    };
    componentDidMount(){
        this.setState({people: peopleModel.people()})
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
        const callback = (p) => {
            return (<PersonComponent key={'person-' + p.personId} person={p} />)
        }

        const people = this.state.people.map(callback);
        return (<div>
                    <div>
                        <PeopleServerComponent  />
                    </div>
                    <hr />
                    <div>
                        <PersonInputFormComponent createPersonHandler={this.handleCreatePerson} />
                    </div>
                    <hr />
                    <div>
                        <ul>{people}</ul>
                    </div>
                </div>)
        }
}

export {PeopleComponent}