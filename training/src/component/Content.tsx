import React, {PureComponent} from 'react';
import './Content.css'
import {peopleModel} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
import { Person} from '../people/model/People';
import PeopleInputFormComponent from '../people/component/PeopleInputFormComponent'
class Content extends PureComponent<{}, {people: Array<Person>}>{
    state = {people: peopleModel.people()}
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
            this.setState({people: [...peopleModel.people()]})
        }, 4000)
    }

    createPerson = (lastname: string, firstname:string) => {
        peopleModel.add(lastname, firstname);
        this.setState({people: [...peopleModel.people()]})
    }

}

export default Content