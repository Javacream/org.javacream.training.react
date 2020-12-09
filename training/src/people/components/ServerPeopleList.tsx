import React from 'react'
import { Person } from '../model/people'
import PersonComponent from './Person'
import peopleController from '../controller/PeopleController'
export default class ServerPeopleList extends React.PureComponent{
    state = {people:[] as Array<Person>}

    async componentDidMount(){
        this.setState({people: await peopleController.findAll()})
    }
    allPeople:Array<Person> = []
    render(){
        const allPeopleHtml:Array<JSX.Element> = this.state.people.map((person) => <li key={person.id}><PersonComponent person={person} detail={true}></PersonComponent></li>)
        return (
        <>
        <h3>PEOPLE LIST</h3>
        <ul>
            {allPeopleHtml}
        </ul>
        </>
    )
}
}