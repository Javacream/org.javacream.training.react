import React, { Component } from 'react';
import {PersonComponent} from './PersonComponent'

export class PeopleServerComponent extends Component{
  state = {
    people: [],
  };

  async loadData() {
    try{
      let result = await fetch('http://10.12.6.1:8080/people')
      let data = await result.json()
      this.setState({people: data})
    }
    catch(err){
      alert("Something went wrong: " + err)
    }
  }

  componentDidMount(){
    this.loadData()
  }

  render(){
    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent key={p.id} person={p}/>)
    return (
          <div>
            <h3>People From Server</h3>
            <div><ol>{peopleHtml}</ol></div>
          </div>
        )
    }
}

