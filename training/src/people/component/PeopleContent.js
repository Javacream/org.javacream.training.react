import React from 'react';
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from "./PeopleInputFormComponent"
import PersonSearchComponent from "./PersonSearchComponent"
import PeopleFromServerComponent from "./PeopleFromServerComponent"
import NavigationComponent from './NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
export default function PeopleContent(props){
        return (<BrowserRouter>
                <NavigationComponent />
                <hr />
                <Switch>
                    <Route path='/people' render={(p) => <PeopleComponent {...p} people={props.people} />} />    
                    <Route path='/peopleInput' render={(p) => <PersonInputFormComponent {...p} createPersonHandler={props.createPersonHandler} />}/>    
                    <Route path='/peopleFromServer' component={PeopleFromServerComponent}/>    
                    <Route path='/peopleSearch' component={PersonSearchComponent}/>    
                </Switch>
           </BrowserRouter>
        )
}
