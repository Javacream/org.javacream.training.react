import { Component } from 'react';

export default class ServerPeopleListComponent{
    url = "http://h2908727.stratoserver.net:8080/people"

    async loadData(url){
        try{
        //let responsePromise = fetch(url)
        let response = await fetch(url)
        //let dataPromise = response.json()
        let data = await response.json()
        this.setState({people: data})
        }catch(error){console.log(error)}
    }

    state = {people: []}

    componentDidMount(){
        this.loadData(this.url)
    }
        
}