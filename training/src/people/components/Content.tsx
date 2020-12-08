import React, { useState } from 'react'
import PeopleList from './PeopleList'
import PersonInput from './PersonInput'
import {peopleModel} from '../model/peopleData'

class ContentClass extends React.PureComponent {
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


export default function Content() {
    const initialState = {people: peopleModel.findAll()}
    const [peopleState, updateState] = useState(initialState)
    const handlePersonCreation = (lastname:string, firstname:string) => {
        peopleModel.create(lastname, firstname)
        updateState({
            people: peopleModel.findAll()
    
        })
    }
    return (
        <div>
            <PeopleList people={peopleState.people}></PeopleList>
            <PersonInput update={handlePersonCreation}></PersonInput>
        </div>
    )

}