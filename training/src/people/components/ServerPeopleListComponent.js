import { Component } from 'react';
import PersonComponent from './PersonComponent';

export default class ServerPeopleListComponent extends Component{
    url = "http://h2908727.stratoserver.net:8080/people"
    state = {people: []}

    async loadData(){
        try{
            let response = await fetch(this.url)
            let data = await response.json()
            this.setState({people: data})
        }
        catch(error){
            console.log(error)
        }
    }


    componentDidMount(){
        this.loadData()
    }

    render(){
        let peopleHtml = this.state.people.map((p) => <PersonComponent key={p.id} person={p} />)
        return (
            <p>{peopleHtml}</p>
        )

    }
        
}