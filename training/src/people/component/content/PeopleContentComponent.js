import React, {Component} from 'react';
import {peopleController} from '../../PeopleContext' 
import PubSub from 'pubsub-js'
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputFormComponent'
import PeopleServerComponent from './PeopleServerComponent';
import PeopleSearchComponent from './PeopleSearchComponent';
import NavigationComponent from './NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class PeopleContentComponent extends Component{
    state = {people: peopleController.allPeople()}
    componentDidMount(){
        this.token = PubSub.subscribe("person.create", this.createPersonCallback)
    }
    createPersonCallback = (topic, personData) =>{
        peopleController.add(personData.lastname, personData.firstname, personData.height, personData.gender)
        this.setState({data: peopleController.allPeople()})
    }


    render (){
    return (<BrowserRouter>
            <NavigationComponent />
            <hr />       
            <Switch>
                    <Route path='/people' render={(props) => <PeopleListComponent {...props} peopleList={this.state.people} />} />    
                    <Route path='/peopleInput' render={(props) => <PersonInputFormComponent {...props} handleCreatePerson={this.createPersonCallback} />}/>    
                    <Route path='/peopleFromServer' component={PeopleServerComponent}/>    
                    <Route path='/peopleSearch' component={PeopleSearchComponent}/>    
                </Switch>
           </BrowserRouter>
        )
    
}
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

}

export default PeopleContentComponent