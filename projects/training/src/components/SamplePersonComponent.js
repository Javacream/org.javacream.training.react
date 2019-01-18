import React, {Component} from 'react';
import {samplePerson} from '../model/PeopleData'
class SamplePersonComponent extends Component{

    constructor(){
        super()
        this.state = {person: samplePerson}
        setInterval(() => {this.setState({person: samplePerson})}, 5000)
    }
    render(){
        return (
        <div>{this.state.person.info()}</div>)
    }
}

export {SamplePersonComponent}