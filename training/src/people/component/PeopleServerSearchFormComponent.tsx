import React, { Component, FormEvent } from 'react';
import {peopleController} from '../../ApplicationContext'
import { Person } from '../model/People';
import PersonComponent from './PersonComponent';

type InputFields = {
  id: number
}

class PersonServerSearchFormComponent extends Component<{}, {fields: InputFields, person?:Person}>{
  state:{fields: InputFields, person?:Person} = {
    fields: {
      id: 0
    }, 
  }
  handleFormSubmit = async (event:FormEvent) => {
    event.preventDefault();
    let person = await peopleController.findById(this.state.fields.id)
    this.setState({person})
  }
  handleChange = (event:React.FormEvent<HTMLInputElement>) => {
    let target = event.currentTarget
    let result:any = this.state.fields
    result[target.name] = target.value
    this.setState({fields: result})
  }
  render(){
    const form = (
      <form onSubmit={this.handleFormSubmit}>
      <input placeholder="Id" name="id" value={this.state.fields.id} onChange={this.handleChange}></input>
      <input type="submit" value="Search Person"/>
      </form>
    )
    if (this.state.person){
      return <>{form}<PersonComponent person= {this.state.person} detail={true} /></>
    } 
    return form
  }

}

export default PersonServerSearchFormComponent