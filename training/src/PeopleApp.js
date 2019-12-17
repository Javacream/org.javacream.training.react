import React, { Component } from 'react';
import './PeopleApp.css';
import {PeopleAppFooter as Footer, PeopleContent as Content, PeopleAppHeader} from './people/PeopleMain'
import {user, peopleData} from './people/testdata/PeopleData'

export default class PeopleApp extends Component {

  constructor(){
    super()
    this.state = {people: peopleData, profile: user}
    setTimeout(() => {
      user.lastname="XXXXXXXXXXXXXX"
      console.log(user.lastname)
      this.setState({profile: user})
    }, 5000)
    setTimeout(() => {
      peopleData.add("Sawitzki", "Egon", 199, 'm')
      this.setState({})
    }, 3000)

  }

  createPerson = (data) => {
    peopleData.add(data.lastname, data.firstname, data.height, data.gender);
    this.setState({})
  }
  render(){
    return (
      <>
      <PeopleAppHeader />
      <Content people={this.state.people} createPersonHandler={this.createPerson}/>
      <Footer user={this.state.profile}/>
      </>
  );
  }
}