import React, { useState } from 'react'
import PeopleList from './PeopleList'
import PersonInput from './PersonInput'
import {peopleModel} from '../model/peopleData'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

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
            <BrowserRouter>
            <Link to='/peopleList'>List</Link>
            <Link to='/personInput'>Input</Link>
            <Link to='/'>Home</Link>
            <Switch>
                <Route path='/peopleList' render={(props) => <PeopleList {...props} people={peopleState.people}></PeopleList>}></Route>
                <Route path='/personInput' render={(props) => <PersonInput {...props} update={handlePersonCreation}></PersonInput>}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )

}