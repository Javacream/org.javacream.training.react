import React, { Component } from 'react';
import {PersonComponent} from './PersonComponent'
import { Person } from '../model/People';

class PeopleServerComponent extends Component{
  state = {
    people: [],
  };

  async loadData() {
    try{
      let result = await fetch('http://localhost:8080/people')
      let data = await result.json()
      let people = data.map((p) => new Person(p.id, p.lastname, p.firstname))
      this.setState({people: people})
    }
    catch(err){
      alert("Something went wrong: " + err)
    }
  }

  componentDidMount(){
    this.loadData()
  }

  handleNameChange = (index) => {
    console.log(`change name for ${index}` )
  }
  render(){
    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent person={p}/>)
    return (
          <div>
            <h3>People</h3>
            <div><ol>{peopleHtml}</ol></div>
          </div>
        )
    }
}

export {PeopleServerComponent}