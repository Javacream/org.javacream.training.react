import React, {PureComponent} from 'react';
import './Content.css'
import {peopleList, peopleModel} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import { Person, PersonClass } from '../people/model/People';
import PeopleInputFormComponent from '../people/component/PeopleInputFormComponent'
import PersonComponent from '../people/component/PersonComponent';
class Content extends PureComponent<{}, {people: Array<Person>}>{
    state = {people: peopleList}
    render(){
        return (

            <div className="content">
                <PeopleListComponent people={this.state.people} />
                <hr />
                <PeopleInputFormComponent createPersonHandler={this.createPerson}/>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({people: [...peopleList]})
        }, 4000)
    }

    createPerson(lastname: string, firstname:string){
        let newPerson = new PersonClass(42, lastname, firstname, 'x', 123);
        peopleModel.add(newPerson);
        console.log("added new Person: " + newPerson.info())
    }

}

export default Content