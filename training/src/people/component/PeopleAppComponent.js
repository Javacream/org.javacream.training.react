import React, {Component} from 'react';
import {peopleData, userProfile} from '../testdata/PeopleData'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent'
import PersonInputFormComponent from './PersonInputFormComponent'
import PeopleFromServerComponent from './PeopleFromServerComponent'
import PersonSearchComponent from './PersonSearchComponent.js'
import NavigationComponent from './NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class PeopleAppComponent extends Component{
    state = {people: peopleData, userProfile: userProfile}
    constructor(){
        super()
        setTimeout(() => {
            userProfile.lastname = "Hoffmann"
            this.setState({...this.state, ...{userProfile: userProfile}})
        }, 5000)
        setTimeout(() => {
            peopleData.add("Ziegler", "Hanns", 155, 'm')
            this.setState({...this.state, ...{people: peopleData}})
        }, 3000)

        //createPerson = createPerson.bind(this)
    }

    createPersonCallback = (personData) =>{
        peopleData.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        console.log("CREATE_PERSON " + personData)
        this.setState({...this.state, ...{people: peopleData}})

    }
    render(){
        return (<BrowserRouter>
                <PersonComponent person={this.state.userProfile} className='profile'/>
                <NavigationComponent />
                <hr />
                <Switch>
                    <Route path='/people' render={(props) => <PeopleComponent {...props} people={this.state.people} />} />    
                    <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} handleCreatePerson={this.createPersonCallback} />}/>    
                    <Route path='/peopleFromServer' component={PeopleFromServerComponent}/>    
                    <Route path='/peopleSearch' component={PersonSearchComponent}/>    
                </Switch>
           </BrowserRouter>
        )
    }}
