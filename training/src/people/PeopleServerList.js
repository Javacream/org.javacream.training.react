import { Component } from "react";
import PersonComponent from "./PersonComponent";

export default class PeopleServerList extends Component{
    url = "http://javacream.eu:8080/people" //REST-Server, der Personen-Daten liefert
    state = {people: []}
    async loadData(){
        const response = await fetch(this.url)
        const peopleList = await response.json()
        this.setState({people: peopleList})
        return "OK"
    }



    componentDidMount(){
        this.loadData()
    }
    render(){
        const peopleHtml = this.state.people.map((p) => <PersonComponent key={p.id} person={p} />)
        return (
            <>
                <p>{peopleHtml}</p>
            </>
        )
    }
}