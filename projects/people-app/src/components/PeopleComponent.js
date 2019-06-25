import React from 'react'
import {PersonComponent} from './PersonComponent'
import {context} from '../Context'

export class PeopleComponent extends React.Component{
    state = {people: []}
    componentDidMount(){
        this.setState({people: context.samplePeople})
        context.peopleComponent = this
    }
    componentWillUnmount(){
        delete(context.peopleComponent)
    }
    render(){
    //peopleHtml is a list of HtmlElements
    let peopleHtml = this.state.people.map((person) => {
        return <PersonComponent key={person.personId} person={person} />
    }
    )
    return (
        <>
            <h2>People</h2>
            <ul>{peopleHtml}</ul>
        </>
    )
}
}
