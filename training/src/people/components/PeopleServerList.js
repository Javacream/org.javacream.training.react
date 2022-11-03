import { Component } from "react";
import PersonComponent from "./PersonComponent";

export default class PeopleServerList extends Component{
    url = "http://h2908727.stratoserver.net:8080/people" //REST-Server, der Personen-Daten liefert
    state = {people: []}
    async loadData(){
        //Plan: Sequenzieller Ablauf
        // const response = fetch(this.url)
        // const peopleList = response.json()
        // this.setState({people: peopleList})
        //Callback-Funktionen
        // const responsePromise = fetch(this.url)
        // responsePromise.then((response) => {
        //     const peopleListPromise = response.json()
        //     peopleListPromise.then((peopleList) => this.setState({people: peopleList}))
        // })
        //fetch(this.url).then((response) => response.json()).then((peopleList) => this.setState({people: peopleList}))
        //async await
        const response = await fetch(this.url)
        const peopleList = await response.json()
        this.setState({people: peopleList})
        //Reactive
        //const client = new HttpClient() //Irgendeine Http-Client-Bibliothek, z.B. axios, ...
        //client.connect(this.url).subscribe((peopleList) => this.setState({people: peopleList}))
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