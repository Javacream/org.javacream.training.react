import React from 'react';
import PubSub from 'pubsub-js'
import {context} from '../Context'
export class PersonInputFormServerComponent extends React.Component{
  state = {
    fields: {
      lastname: '',
      firstname: ''
    }
  }
  handleFormSubmit = async (event) => {
        let lastname = this.state.fields.lastname
        let firstname = this.state.fields.firstname
        let createdId = context.peopleModel.add(lastname, firstname)
        let person = context.peopleModel.personWith(createdId)
        
        try{
          await fetch('http://10.12.6.1:8080/people', {
          method: 'post',
          headers: {
            'Accept': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(person)
        })
        PubSub.publish("SERVERCREATED", createdId)
      }
      catch(error){
        console.log(error);
      }
/*
        if (context.peopleComponent){
            context.peopleComponent.setState({people:context.peopleModel.people()})
        }*/
      event.preventDefault();
  }
  handleChange = (event) => {
    let target = event.target
    let result = this.state.fields
    result[target.name] = target.value
    this.setState({fields: result})
  }
  render(){
    return (
      <form onSubmit={this.handleFormSubmit}>
      <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
      <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
      <input type="submit" value="Create Person"/>
      </form>
    )
  }

}
