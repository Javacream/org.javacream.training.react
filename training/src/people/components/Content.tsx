import React, { useEffect, useState } from 'react'
import PeopleList from './PeopleList'
import PersonInput from './PersonInput'
import PersonSearch from './PersonSearch'
import peopleController from '../controller/PeopleController'
import {peopleModel} from '../model/peopleData'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { subscribe, unsubscribe } from 'pubsub-js'

export default async function Content() {
    const initialState = {people: await peopleController.findAll()}
    const [peopleState, updateState] = useState(initialState)
    const handlePersonCreation = async (lastname:string, firstname:string) => {
        peopleModel.create(lastname, firstname)
        updateState({
            people: await peopleController.findAll()
    
        })
    }
    const handlePersonDeleteNotification = async (message:string, data:any) => {
        updateState({
            people: await peopleController.findAll()
    
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