import React, { useEffect, useState } from 'react'
import PeopleList from './PeopleList'
import PersonInput from './PersonInput'
import PersonSearch from './PersonSearch'
import {peopleModel} from '../model/peopleData'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { subscribe, unsubscribe } from 'pubsub-js'

export default function Content() {
    const initialState = {people: peopleModel.findAll()}
    const [peopleState, updateState] = useState(initialState)
    const handlePersonCreation = (lastname:string, firstname:string) => {
        peopleModel.create(lastname, firstname)
        updateState({
            people: peopleModel.findAll()
    
        })
    }
    const handlePersonDeleteNotification = (message:string, data:any) => {
        updateState({
            people: peopleModel.findAll()
    
        })

    }
    useEffect( () =>  {
        console.log("did mount")
        const subscription = subscribe("people.delete", handlePersonDeleteNotification)
        return () => {        
                console.log("will unmount")
                unsubscribe(subscription)
            }
        }
        , [])
    return (
        <div>
            <BrowserRouter>
            <Link to='/'>Home</Link>
            <Link to='/peopleList'>List</Link>
            <Link to='/personInput'>Input</Link>
            <Link to='/personSearch'>Search</Link>
            <Switch>
                <Route path='/peopleList' render={(props) => <PeopleList {...props} people={peopleState.people}></PeopleList>}></Route>
                <Route path='/personInput' render={(props) => <PersonInput {...props} update={handlePersonCreation}></PersonInput>}></Route>
                <Route path='/personSearch' render={(props) => <PersonSearch {...props} ></PersonSearch>}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )

}