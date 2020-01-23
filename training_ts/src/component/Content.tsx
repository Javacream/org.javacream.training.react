import React from 'react';
import {peopleModel} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import PeopleServerListComponent from '../people/component/PeopleServerListComponent'
import PersonInputFormComponent from '../people/component/PersonInputFormComponent'
import './Content.css'
import { PureComponent } from 'react';
import {Person, PersonClass} from '../people/model/People'
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
        return (<>
                    <PeopleListComponent people={this.state.people} deletePersonHandler={this.handleDeletePerson}></PeopleListComponent>
                    <hr />
                    <PersonInputFormComponent createPersonHandler={this.handleCreatePerson}></PersonInputFormComponent>
                    <hr />
                    <PeopleServerListComponent />
                </>
                )
    }

    handleCreatePerson = (personData:{data: {lastname:string, firstname:string}}) => {
        let person = new PersonClass(Math.floor(Math.random() * 100001), personData.data.lastname, personData.data.firstname, "f")
        peopleModel.add(person)
        this.changeState()
      }
    handleDeletePerson = (id: number) => {
        peopleModel.remove(id)
        this.changeState();
    }  
    changeState(){
        this.setState({people:peopleModel.people()})
    }

}

export default Content; 