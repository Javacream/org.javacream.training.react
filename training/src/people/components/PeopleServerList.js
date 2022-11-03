import { Component } from "react";
import PersonComponent from "./PersonComponent";
import { baseUrl } from "../PeopleApplicationContext";

export default class PeopleServerList extends Component{
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
        const response = await fetch(baseUrl)
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