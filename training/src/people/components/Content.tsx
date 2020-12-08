import React from 'react'
import PeopleList from './PeopleList'
import PersonInput from './PersonInput'
import {peopleModel} from '../model/peopleData'

export default class Content extends React.PureComponent {
    state = {
        people: peopleModel.findAll()

    }
    render(){
    return (
        <div>
            <PeopleList people={this.state.people}></PeopleList>
            <PersonInput update={this.handlePersonCreation}></PersonInput>
        </div>
    )
    }

    handlePersonCreation = (lastname:string, firstname:string) => {
        peopleModel.create(lastname, firstname)
        this.setState({
            people: peopleModel.findAll()
    
        })
    }
}