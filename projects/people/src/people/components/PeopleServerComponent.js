import React, { Component } from 'react';
import {PersonComponent} from './PersonComponent'

class PeopleServerComponent extends Component{
  state = {
    people: [],
  };

  async loadData() {
    try{
      let result = await fetch('http://10.28.6.1:8080/people')
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

  handleNameChange = (index) => {
    console.log(`change name for ${index}` )
  }
  render(){
    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent key={p.id} index={p.id} lastname={p.lastname} firstname={p.firstname} married={p.partner ? true : false} handleNameChange={this.handleNameChange}/>)
    return (
          <div>
            <h3>People</h3>
            <div><ol>{peopleHtml}</ol></div>
          </div>
        )
    }
}

export {PeopleServerComponent}
