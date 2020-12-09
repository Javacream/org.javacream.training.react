import React, { ChangeEvent } from 'react'
import { Person } from '../model/people'

import { peopleModel } from '../model/peopleData'
import PersonComponent from './Person'
type stateType = {
    fields: {
      id: number
    },
    result?:Person

  }

export default class PersonSearchFormComponent extends React.PureComponent<{}, stateType>{
  
    state:stateType = {
      fields: {
        id: 0
      }
    }
  
    handleFormSubmit = (event:any) => {
      event.preventDefault();
      const searchResult = peopleModel.findById(Number(this.state.fields.id))
      this.setState({result: searchResult})


    }
    handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      let target = event.target
      let result:any = this.state.fields
      result[target.name] = target.value
      this.setState(result)
    }
    render(){
      let searchResultHtml = (<></>)
      if (this.state.result){
        searchResultHtml = <PersonComponent detail={false} person={this.state.result} />
      }
      return (
        <>
        <input placeholder="Id" name="id" value={this.state.fields.id} onChange={this.handleChange}></input>
        <button  onClick={this.handleFormSubmit}>Search Person</button>
        {searchResultHtml}
        </>
      )
    }
  
  }
  